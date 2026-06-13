export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Welcome to Next.js 16
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern, fully configured Next.js application with TypeScript, Tailwind CSS, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get Started
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-secondary active:scale-95"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12">
          <div className="rounded-lg border border-border bg-card p-6 text-left">
            <h3 className="font-semibold text-foreground">Fast</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Built on Next.js 16 with Turbopack for ultra-fast builds and HMR.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 text-left">
            <h3 className="font-semibold text-foreground">Typed</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Full TypeScript support with strict mode enabled for type safety.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6 text-left">
            <h3 className="font-semibold text-foreground">Styled</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tailwind CSS with semantic design tokens and dark mode support.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
