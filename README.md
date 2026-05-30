# Telegram Cloud Drive ☁️

[![Downloads](https://img.shields.io/badge/downloads-latest-blue)](https://github.com/shohan-001/telegram-cloud-drive/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**Turn your Telegram account into an unlimited, secure, and free cloud storage drive.**

Unlike traditional cloud providers with strict limits, this open-source application leverages the Telegram MTProto API to provide you with infinite storage capacity across Windows, macOS, Linux, and Android.

## Features

- **Unlimited Storage:** Upload as many files as you want using Telegram's generous cloud infrastructure.
- **Fast Uploads & Downloads:** Parallel chunked streaming directly to Telegram's edge nodes.
- **Multi-Platform:** Fully native desktop app (Windows, macOS, Linux) and mobile app (Android).
- **Ad-Free:** A clean, minimal interface with zero advertisements.
- **Auto-Updating:** Automatically fetches the latest updates seamlessly.

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

## Acknowledgments
This project is an ad-free fork and continuation. Original source code was developed by Cameron Amer and is available under the MIT License.

## License
MIT License. See `LICENSE` file for details.
