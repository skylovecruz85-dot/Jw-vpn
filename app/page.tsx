export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">JW-VPN</h1>
          <p className="text-lg text-muted-foreground">Fast, Secure, and Reliable VPN Service</p>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold">
            Get Started
          </button>
          <button className="border border-border text-foreground px-6 py-2 rounded font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
