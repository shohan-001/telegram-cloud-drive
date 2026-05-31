import { useQuery } from '@tanstack/react-query';
import { useSettings } from '../context/SettingsContext';

export interface TMDBResult {
    id: number;
    title?: string;
    name?: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
    media_type: 'movie' | 'tv';
}

function cleanFileName(filename: string): string {
    // Remove extension
    let name = filename.replace(/\.[^/.]+$/, "");
    
    // Remove telegram channel prefixes like @ChannelName-, [Channel], etc BEFORE replacing dots/underscores
    name = name.replace(/^@[\w]+\s*-?\s*/i, '');
    
    // Replace dots and underscores with spaces
    name = name.replace(/[\._]/g, ' ');
    
    // Remove resolutions, codecs, HDR, etc.
    name = name.replace(/\b(1080p|720p|2160p|4k|x264|x265|hevc|h264|h265|bluray|web-dl|webrip|hdr|10bit|dsnp)\b/gi, '');
    
    // Extract Season/Episode (e.g., S01E01 or E01) and remove anything after it
    const seMatch = name.match(/(?:S\d+)?E\d+/i);
    if (seMatch && seMatch.index !== undefined) {
        name = name.substring(0, seMatch.index);
    }
    
    // Remove year in parenthesis or just standalone year (e.g. (2023) or 2023)
    name = name.replace(/\b\d{4}\b/, '');
    name = name.replace(/\(\)/, '');

    // Trim extra spaces and brackets
    name = name.replace(/\[.*?\]/g, '');
    name = name.replace(/\(.*?\)/g, '');
    
    // Final cleanup of extra spaces or dashes
    name = name.replace(/\s+/g, ' ').trim();
    name = name.replace(/^-+|-+$/g, '').trim();

    return name;
}

export function useTMDB(filename: string, isVideo: boolean) {
    const { settings } = useSettings();
    const apiKey = settings.tmdbApiKey;

    return useQuery<TMDBResult | null>({
        queryKey: ['tmdb', filename],
        queryFn: async () => {
            if (!apiKey || !isVideo) return null;
            
            const query = cleanFileName(filename);
            if (!query) return null;

            const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
            if (!res.ok) throw new Error('TMDB fetch failed');
            
            const data = await res.json();
            
            // Filter to only movies or tv shows, and take the first highly relevant result
            const results = data.results?.filter((r: any) => r.media_type === 'movie' || r.media_type === 'tv') || [];
            
            if (results.length > 0) {
                return results[0] as TMDBResult;
            }
            return null;
        },
        staleTime: 1000 * 60 * 60 * 24, // cache for 24 hours
        enabled: Boolean(apiKey && isVideo),
        retry: false,
    });
}
