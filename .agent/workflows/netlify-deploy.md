---
description: How to deploy the Next.js portfolio to Netlify
---

Since your code is already on GitHub, follow these steps to deploy with continuous integration:

1.  **Log in to Netlify**: Go to [Netlify.com](https://www.netlify.com/) and sign in.
2.  **Add New Site**: Click on the **"Add new site"** button and select **"Import from original Git provider"**.
3.  **Deploy from GitHub**: Choose **GitHub** and authorize Netlify.
4.  **Select Repository**: Search for and select `portfolio_react`.
5.  **Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `.next`
    - **Note**: Netlify usually detects these automatically for Next.js.
6.  **Environment Variables**: If you have any (like Firestore keys), add them in the "Environment Variables" section.
7.  **Deploy**: Click **"Deploy portfolio_react"**.

Every time you push code to GitHub in the future, Netlify will automatically rebuild and update your live site.
