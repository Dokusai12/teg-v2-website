import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CAREER_JOBS } from "@/data/careers";
import { ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-12 px-4 lg:px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Join the team powering revenue for global travel platforms
          </h1>
          <div className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto space-y-4 text-left sm:text-center">
            <p>
              We work with leading booking platforms to embed high-performing ancillary products
              directly into their checkout flow.
            </p>
            <p>If you&apos;re passionate about great products and meaningful impact, we&apos;d love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 lg:px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Open positions</h2>
          <ul className="flex flex-col gap-4">
            {CAREER_JOBS.map((job) => (
              <li key={job.id}>
                <Link
                  to={`/careers/${job.id}`}
                  className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 rounded-xl border border-border bg-card p-6 hover:border-accent/30 hover:bg-card/80 transition-colors"
                >
                  <div className="min-w-0 text-left">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {job.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-[13px] text-muted-foreground mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
                      {job.location}
                    </p>
                    <p className="text-[14px] text-muted-foreground mt-2 leading-relaxed">{job.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[14px] font-medium text-accent shrink-0 sm:mt-1">
                    View role & apply
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
