# JW-VPN

A modern web application for managing and accessing VPN services with a free tier and monthly subscription options.

## Features

- **Free Tier** - Limited data access for new users
- **Monthly Subscriptions** - Flexible payment plans
- **Fast & Secure** - Built with Next.js 16 for performance
- **TypeScript** - Full type safety and developer experience
- **Responsive Design** - Works seamlessly on all devices
- **Dark Mode** - Built-in dark mode support
- **Modern UI** - Tailwind CSS styling with semantic design tokens

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, yarn, or bun

### Installation

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home/dashboard page
│   └── globals.css         # Global styles with design tokens
├── components/             # Reusable React components
├── public/                 # Static assets (images, fonts, etc.)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint rules
├── package.json            # Project dependencies
└── README.md              # This file
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Design System

The project includes a semantic color system supporting light and dark modes:

- **Primary** - Brand color for actions and highlights
- **Secondary** - Supporting color for secondary actions
- **Accent** - Complementary color for emphasis
- **Destructive** - Color for delete/error actions
- **Muted** - Color for disabled or secondary text
- **Background/Foreground** - Main page colors
- **Card** - Component background colors
- **Border** - Border and divider colors

All colors are defined as CSS variables in `globals.css` for easy theming.

## Future Development

- [ ] User authentication system
- [ ] VPN server selection
- [ ] Data usage tracking
- [ ] Subscription management
- [ ] Payment integration
- [ ] Server status monitoring
- [ ] Usage analytics dashboard

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## License

MIT
