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

## Content Management

### Adding Screenshots to Posts
To include your own charts or screenshots:

1.  Place your image files in the `public/images/` folder.
2.  In your post file (e.g., `posts/market-structure.ts`), reference the image using Markdown syntax.
3.  **Important:** The image code must be on its own line.

**Example:**
```typescript
content: `
## Analysis
Here is the H4 structure break:

![H4 Structure Break](/images/h4-break.png)

As you can see, the previous high was violated.
`
```

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
- `/public/images`: Directory for local blog images.
