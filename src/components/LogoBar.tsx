const logos = ['Ryanair', 'Booking.com', 'Trainline', 'GetYourGuide', 'Skyscanner', 'Omio', 'TUI', 'Kiwi.com'];

export function LogoBar() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-5 mb-6">
        <p className="text-[13px] text-muted-foreground text-center">
          Trusted by industry-leading platforms worldwide
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex marquee w-max">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-10 md:px-14">
              <span className="text-[15px] md:text-[17px] font-semibold text-muted-foreground/30 whitespace-nowrap tracking-tight">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
