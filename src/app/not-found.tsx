import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Navbar, Footer } from "@/views/home";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="relative overflow-hidden pt-40 pb-28">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/12 blur-[180px] pointer-events-none" />
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-2xl">
          <p className="font-display text-8xl md:text-9xl text-primary leading-none mb-4">404</p>
          <h1 className="font-display text-4xl md:text-5xl uppercase tracking-tight text-white mb-4">
            This page blew a fuse.
          </h1>
          <p className="text-zinc-400 text-lg mb-10">
            The page you're looking for doesn't exist or has moved. Let's get you back to booking more HVAC jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-sm"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:8885554822"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border-2 border-white/20 text-white hover:border-primary hover:text-primary font-bold uppercase tracking-wider text-sm"
            >
              <Phone className="w-4 h-4" /> (888) 555-4822
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
