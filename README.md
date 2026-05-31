# Telegram Cloud Drive ☁️

[![Downloads](https://img.shields.io/badge/downloads-latest-blue)](https://github.com/shohan-001/telegram-cloud-drive/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Turn your Telegram account into an unlimited, secure, and free cloud storage drive.**

Unlike traditional cloud providers with strict limits, this open-source application leverages the Telegram MTProto API to provide you with infinite storage capacity across Windows, macOS, Linux, and Android.

<div align="center">
  <img src="screenshots/AuthScreen.png" alt="Auth Screen" />
</div>

## What is Telegram Drive?

Telegram Drive leverages the Telegram API to allow you to upload, organize, and manage files directly on Telegram's servers. It treats your "Saved Messages" and created Channels as folders, giving you a familiar file explorer interface for your Telegram cloud.

### Key Features

*   **Unlimited Cloud Storage**: Utilizing Telegram's generous cloud infrastructure.
*   **Ad-Free Experience:** A clean, minimal interface with zero advertisements (this fork removes all ads found in the original build).
*   **High Performance Grid**: Virtual scrolling handles folders with thousands of files instantly.
*   **Auto-Updates**: Seamless updates for Windows, macOS, and Linux, fetched securely from this repository.
*   **Media Streaming**: Stream video and audio files directly without downloading.
*   **PDF Viewer:** Built-in PDF support with infinite scrolling for seamless document reading.
*   **Drag & Drop**: Intuitive drag-and-drop upload and file management.
*   **Thumbnail Previews**: Inline thumbnails for images and media files.
*   **Folder Management**: Create "Folders" (private Telegram Channels) to organize content.
*   **Shareable Links**: Generate direct download links with optional password protection and expiration, and revoke access anytime from the dashboard. Also supports copying native Telegram message links for files in public channels.
*   **REST API for AI Integration**: Secure local API (off by default) with configurable port and API key auth. OpenAPI spec for seamless LLM and tool integration.
*   **Proxy Support**: Native integration for SOCKS5 and MTProto proxies to bypass regional restrictions and secure your traffic.
*   **VPN Optimizer**: Aggressive network tuning including bandwidth throttling, adjustable transfer chunk sizing, and adaptive keep-alives to ensure maximum stability on high-latency connections.
*   **Privacy Focused**: API keys and data stay local. No third-party servers.
*   **Cross-Platform**: Native apps for macOS (Intel/ARM), Windows, Linux and Android.

## Getting Started

1. Go to the [Releases page](https://github.com/shohan-001/telegram-cloud-drive/releases) and download the latest installer for your operating system.
2. Open the app and log in using your Telegram phone number.
3. Start uploading your files!

## Building from Source

If you want to build the app from source yourself:

1. Ensure you have **Node.js**, **Rust**, and the **Tauri CLI** installed.
2. Clone this repository:
   ```bash
   git clone https://github.com/shohan-001/telegram-cloud-drive.git
   cd telegram-cloud-drive
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the app:
   ```bash
   npm run tauri build
   ```

## Acknowledgments & Special Thanks
A massive and special thanks to the original creator, **Cameron Amer**, for developing the initial open-source version of this application. This repository is an ad-free fork and continuation of their incredible work.

## License & Copyright
Copyright © 2024 Shohan
Copyright © 2024 Cameron Amer (Original Author)

This project is licensed under the MIT License. See the `LICENSE` file for full details.
