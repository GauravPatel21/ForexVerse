# ForexVerse

A premium, fintech-grade educational forex platform focusing on price action and market structure.

## Deployment Checklist

Before deploying, please ensure the following:

### 1. Comments System (Giscus)
For the comments section to appear correctly (and avoid "Refused to connect" errors):
1.  **Public Repo**: The repository `GauravPatel21/forexverse-comments` must be **Public**.
2.  **Enable Discussions**: Go to Repo Settings -> General -> Features -> Check **Discussions**.
3.  **Install App**: Ensure the **Giscus** GitHub App is installed and has access to the repository.

### 2. Deployment to GitHub Pages
This project uses a query-based router (`?page=POST`), which is 100% compatible with GitHub Pages default hosting.

1.  Build the project:
    ```bash
    npm run build
    ```
2.  Deploy the output folder (usually `dist` or `build`) to your `gh-pages` branch.

## Features
- **Price Action Education**: Zero indicators, pure structure.
- **Tools**: Pip calculator, session timings, charting.
- **Premium UI**: Fintech-styled gradients, Inter font, clean whitespace.
- **Search**: Client-side search for articles and tags.
- **SEO**: Meta tags and OpenGraph support.

## Project Structure
- `/pages`: Main view components (Home, PostView, etc.)
- `/components`: Reusable UI elements (Navbar, Comments, Icons)
- `/data.ts`: All static content and article data.
- `/types.ts`: TypeScript definitions.
