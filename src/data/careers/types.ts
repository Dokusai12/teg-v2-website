export type JobBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type CareerJob = {
  id: string;
  title: string;
  location: string;
  summary: string;
  blocks: JobBlock[];
};
