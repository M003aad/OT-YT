# Contributing

Thank you for helping improve OT-YT. Contributions should focus on the extension's stated purpose: showing YouTube video titles in their original uploaded language.

## Report Bugs and Propose Features

- Search [existing issues](https://github.com/M003aad/OT-YT/issues) before opening a new one.
- For a bug, include the browser and version, affected YouTube page type, expected and observed behavior, and concise reproduction steps. Remove account details, private URLs, and other sensitive information.
- For a feature proposal, explain the user problem, the intended behavior, and any relevant limitations or alternative approaches.
- For suspected security vulnerabilities, follow [SECURITY.md](./SECURITY.md) instead of opening a public issue.

## Local Development

1. Install a current Node.js LTS release and npm.
2. Clone the repository and enter its directory:

   ```sh
   git clone https://github.com/M003aad/OT-YT.git
   cd OT-YT
   ```

3. Install the locked development dependencies:

   ```sh
   npm ci
   ```

4. Load the repository as an unpacked extension in Chrome via `chrome://extensions/` with Developer mode enabled.
5. After making changes, reload the extension and refresh the relevant YouTube page.
6. Run the checks before submitting:

   ```sh
   npm run lint
   npm run validate
   ```

The extension is plain JavaScript and requires no build or bundling step. It does not use environment variables.

## Pull Requests

- Keep changes focused and preserve the existing extension behavior outside the intended change.
- Describe the motivation, implementation, and any user-visible behavior changes.
- Include reproduction or verification steps; add or update tests when appropriate.
- Confirm `npm run lint` and `npm run validate` pass.
- Do not include credentials, private user data, generated archives, or unrelated formatting changes.
- Link any related issue and be responsive to review feedback.
