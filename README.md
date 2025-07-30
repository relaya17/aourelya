# Slice of Home Delivery - Personal Portfolio

A modern React portfolio website built with Vite, Material-UI, and React Router.

## Features

- 🚀 Built with Vite for fast development and building
- 🎨 Material-UI components for consistent design
- 🌐 React Router for navigation
- 🌍 Internationalization support (Hebrew/English)
- 📱 Responsive design
- ⚡ Optimized for performance

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Deployment

This project is configured for deployment on Netlify with the following settings:

- Build command: `pnpm install && pnpm run build`
- Publish directory: `dist`
- Node version: 18

## Project Structure

```
src/
├── components/     # React components
├── App.jsx        # Main app component
├── main.jsx       # Entry point
└── theme.js       # Material-UI theme
```

## Technologies Used

- React 18
- Vite
- Material-UI
- React Router
- React i18next
- Framer Motion
- Recharts