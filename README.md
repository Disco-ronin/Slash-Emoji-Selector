# Slash Emoji Picker — AMO Reviewer Notes

## What This Extension Does
A content script that detects when the user types "/" in any text input field and displays an inline emoji picker. The user can search, navigate with keyboard, and insert emojis. No data leaves the browser.

## Why `<all_urls>` Match Pattern
The content script must run on every page because the extension is designed to work in any text field across the web — chat apps, email clients, social media, code editors, etc. Restricting to specific domains would defeat the purpose.

## Permissions
No permissions are requested. The extension does not use any WebExtension APIs beyond basic content script injection. It does not access storage, cookies, tabs, browsing history, or any other browser API.

## Data Collection
None. The extension makes zero network requests. No analytics, no telemetry, no remote code. All emoji data is hardcoded in content.js. The `data_collection_permissions` in the manifest reflects this.

## Files
- `manifest.json` — Extension configuration
- `content.js` — Content script: emoji data, picker UI, keyboard handling, insertion logic
- `content.css` — Styles for the floating emoji picker
- `icons/` — SVG icons for the extension
