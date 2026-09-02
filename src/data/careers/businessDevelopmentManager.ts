import type { CareerJob, JobBlock } from "./types";

const sharedBdmBlocks: JobBlock[] = [
  {
    type: "p",
    text: "At Tego Group, we partner with travel platforms, OTAs and ticketing businesses to help them unlock new revenue while offering customers genuine booking flexibility.",
  },
  {
    type: "p",
    text: "This is a hands-on, individual-contributor role designed for someone who is comfortable or wants to step up into more complex, enterprise-style B2B deals, earn meaningful commission, and grow into a senior commercial or leadership position as the business scales.",
  },
  {
    type: "p",
    text: "You'll be given support, founder access, and some warm meetings, but success in this role comes from ownership, initiative, and execution.",
  },
  { type: "h3", text: "Key responsibilities" },
  {
    type: "ul",
    items: [
      "End-to-end ownership of complex B2B deals",
      "Manage consultative, multi-stakeholder sales cycles involving legal, finance, and senior leadership",
      "Work directly with founders on pricing, proposals, and strategy",
      "Driving momentum through internal reviews and legal stages",
      "Keeping CRM and pipeline updates accurate and visible",
      "Manage and nurture relationships with senior stakeholders (Directors, VPs, CEOs) across the travel industry",
      "Represent Tego Group at international conferences, client meetings and industry events",
    ],
  },
  { type: "h2", text: "What this role is (and isn't)" },
  { type: "h3", text: "This role is" },
  {
    type: "ul",
    items: [
      "High-ownership and outcome-focused",
      "Ideal for someone stepping up into more complex deals",
      "Supported, but not micromanaged",
      "Built around long-term upside and progression",
    ],
  },
  { type: "h3", text: "This role is not" },
  {
    type: "ul",
    items: [
      "A high-volume transactional sales role",
      "A junior SDR position",
      "A short-cycle, quick-win sales environment",
    ],
  },
  { type: "h3", text: "Deal specification" },
  {
    type: "ul",
    items: [
      "Deal size: £100k–£5m+",
      "Sales cycle: 2–12 months (average 3–4 months)",
      "Decision makers: C-suite",
      "Product: Ancillary revenue",
      "Commission structure: % of revenue, uncapped, paid over the full term of the deal",
    ],
  },
  { type: "h2", text: "Who this role suits" },
  {
    type: "p",
    text: "You'll likely be a great fit if you:",
  },
  {
    type: "ul",
    items: [
      "Have 2–5+ years experience in B2B sales, business development, or partnerships",
      "Have experience generating your own leads and progressing deals",
      "Are confident speaking with senior stakeholders and decision-makers",
      "Are comfortable learning and handling more complex commercial discussions",
      "Are motivated by commission, growth, and long-term progression, not just base salary",
      "Want to work closely with founders and grow with the business",
      "Experience in travel, tech, SaaS, platforms or marketplaces is a strong advantage, but not essential",
      "Are happy to travel internationally to meet with prospects, clients and represent the business at conferences",
    ],
  },
  { type: "h2", text: "Progression & growth" },
  {
    type: "p",
    text: "This role is intentionally designed to start as an individual contributor. For the right person, there is a clear path into a senior or leadership position, including:",
  },
  {
    type: "ul",
    items: [
      "Managing a partnerships or sales team",
      "Senior or director level positions, globally",
      "Taking ownership of wider commercial strategy",
      "Increasing base salary and commission opportunities as responsibility grows",
    ],
  },
  {
    type: "p",
    text: "Progression is driven by results and impact.",
  },
  { type: "h2", text: "Why join Tego Group?" },
  {
    type: "ul",
    items: [
      "Proven product and live partnerships in place with industry leaders",
      "No bureaucracy, no layers of approval",
      "High trust, high accountability culture",
      "Opportunity to build a career, not just hold a job",
      "Exposure to a high-growth startup with equity options available",
    ],
  },
];

function buildBdmJob(
  id: string,
  location: string,
  summary: string,
  hiringParagraph: string,
): CareerJob {
  const blocks: JobBlock[] = [
    { type: "h2", text: "About the role" },
    sharedBdmBlocks[0]!,
    { type: "p", text: hiringParagraph },
    ...sharedBdmBlocks.slice(1),
  ];
  return {
    id,
    title: "Business Development Manager",
    location,
    summary,
    blocks,
  };
}

export const bdmUk: CareerJob = buildBdmJob(
  "business-development-manager-uk",
  "United Kingdom · Remote",
  "Scale B2B partnerships across the UK and Europe with high ownership and uncapped commission.",
  "We're hiring a Business Development Manager to help us originate, close and scale B2B partnerships across the UK and Europe.",
);

export const bdmNorthAmerica: CareerJob = buildBdmJob(
  "business-development-manager-north-america",
  "North America · Remote",
  "Scale B2B partnerships across North America with high ownership and uncapped commission.",
  "We're hiring a Business Development Manager to help us originate, close and scale B2B partnerships across North America.",
);
