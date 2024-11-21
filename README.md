This is a **[Next.js](https://nextjs.org)** project integrated with the **TMDb API**. It uses **Material-UI** for styling and UI components, creating a sleek and responsive interface.

---

## Features

- **Optimized Fonts**: Utilizes [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for efficient font loading.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: v16.8 or higher.
- **Package Manager**: npm, yarn, pnpm, or bun.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure the TMDb API:
   - Add your TMDb API key to the `.env.local` file:
     ```env
     NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
     ```
   - Replace `your_tmdb_api_key` with your API key from [TMDb](https://www.themoviedb.org/documentation/api).

### Running the Development Server

Start the development server with your preferred package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Editing Pages

You can start editing the application by modifying the `app/page.js` file. The app will automatically update as you save changes.

---

## Material-UI Integration

This project uses **Material-UI** for building React components. To learn more about Material-UI, check out:

- [Material-UI Documentation](https://mui.com) - Learn how to build powerful UIs.
- [Material-UI GitHub](https://github.com/mui/material-ui) - Feedback and contributions are welcome!

---

## Learn More About Next.js

For further exploration of Next.js, refer to:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com). Follow the deployment guide:

- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

---

## License

This project is open-source and available under the MIT License. See the `LICENSE` file for details.
