import type { JobBlock } from "@/data/careers";

export function JobDescription({ blocks }: { blocks: JobBlock[] }) {
  return (
    <div className="max-w-3xl">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-xl font-semibold text-foreground mt-12 mb-3 first:mt-0 scroll-mt-28"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="text-lg font-semibold text-foreground mt-8 mb-2">
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc pl-5 space-y-2 text-[15px] text-muted-foreground leading-relaxed mb-6"
              >
                {b.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
