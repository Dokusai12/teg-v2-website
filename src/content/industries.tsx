import type { ReactNode } from 'react';
import {
  Gauge,
  Wallet,
  ShieldCheck,
  Globe2,
  Layers,
  Users,
  Ticket,
  Building2,
  Compass,
  Train,
  Plug,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import { TravelCheckoutMockup } from '@/components/industry/mockups/TravelCheckoutMockup';
import { FareComparisonMockup } from '@/components/industry/mockups/FareComparisonMockup';
import { HotelBookingMockup } from '@/components/industry/mockups/HotelBookingMockup';
import { TicketCheckoutMockup } from '@/components/industry/mockups/TicketCheckoutMockup';
import { ExperienceMobileMockup } from '@/components/industry/mockups/ExperienceMobileMockup';
import { PlatformDiagramMockup } from '@/components/industry/mockups/PlatformDiagramMockup';

export interface IndustryContent {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  lead: string;
  keyPoints: string[];
  visual: ReactNode;
  stats: { value: string; label: string }[];
  pillars: { icon: LucideIcon; title: string; body: string }[];
  fit: { title: string; body: string }[];
  products: string[];
  steps: { title: string; description: string; detail?: string }[];
  faqs: { question: string; answer: string }[];
}

const sharedSteps = (surface: string) => [
  {
    title: 'Map the moment',
    description: `We look at ${surface} with you and identify where an offer converts best.`,
    detail: 'Usually the payment step, where intent and price anchoring are highest.',
  },
  {
    title: 'Integrate once',
    description: 'One quote call and one purchase call, hosted component or your own UI.',
  },
  {
    title: 'Launch and measure',
    description: 'Attach rate, revenue per booking and settlement are visible from the first sale.',
  },
  {
    title: 'Tune continuously',
    description: 'Placement, wording and pricing are tested with you so performance keeps improving.',
  },
];

const sharedFaqs = (noun: string) => [
  {
    question: `Will this disrupt our existing ${noun} flow?`,
    answer:
      'No. The offer is an additional step inside your existing checkout, not a replacement for it. Nothing about your pricing, inventory or policies has to change.',
  },
  {
    question: 'What does our team have to run?',
    answer:
      'Nothing after launch. Customer requests, assessments and payouts are handled end to end by our team under our own terms.',
  },
  {
    question: 'How is revenue settled?',
    answer:
      'A transparent share of every sale, agreed up front, reconciled automatically and reported in real time alongside attach rate.',
  },
  {
    question: 'How long does it take to go live?',
    answer:
      'Most partners are live in days with the hosted component. Teams building their own UI typically ship within one sprint.',
  },
];

export const industries: Record<string, IndustryContent> = {
  travel: {
    slug: 'travel',
    name: 'Travel',
    eyebrow: 'Industry · Travel',
    headline: 'Turn every booking into high-margin revenue',
    lead: 'Add a new ancillary stream across your whole booking flow without changing your core product. Protection offers convert hesitation into revenue at the exact moment the traveller commits.',
    keyPoints: [
      'Reduce purchase friction at the highest-intent moment',
      'High-margin ancillary revenue on every booking',
      'Works across flights, packages and multi-product baskets',
      'Fits existing booking flows without replatforming',
    ],
    visual: <TravelCheckoutMockup />,
    stats: [
      { value: '+10–15%', label: 'Increase in basket value [placeholder — confirm range]' },
      { value: '15–25%', label: 'Typical attach rate [placeholder — confirm range]' },
      { value: 'Fully managed', label: 'Requests, assessment and payouts' },
      { value: 'Zero', label: 'Operational overhead for your team' },
    ],
    pillars: [
      {
        icon: Wallet,
        title: 'Yield per transaction',
        body: 'Protection is one of the few ancillaries that raises revenue per booking without discounting inventory or renegotiating supply.',
      },
      {
        icon: Gauge,
        title: 'Confidence at checkout',
        body: 'A clear refundable option reassures travellers comparing non-refundable fares, which is where most abandonment happens.',
      },
      {
        icon: Layers,
        title: 'Any basket shape',
        body: 'Flights, hotels, packages and multi-passenger baskets are all priced correctly, so the same integration serves your whole catalogue.',
      },
      {
        icon: Globe2,
        title: 'Every market you sell in',
        body: 'Multi-currency pricing, translated copy and per-market disclosure are handled inside the integration.',
      },
    ],
    fit: [
      {
        title: 'OTAs and metasearch',
        body: 'High volume, thin margin. Protection adds margin per transaction without touching your fare or hotel rates.',
      },
      {
        title: 'Consolidators',
        body: 'Offer downstream partners a ready-made ancillary they can resell under their own brand.',
      },
      {
        title: 'Retail and corporate agencies',
        body: 'Give agents a straightforward, high-value option to attach at the point of sale.',
      },
    ],
    products: ['refund-shield', 'air-shield', 'bundles'],
    steps: sharedSteps('your booking funnel'),
    faqs: sharedFaqs('booking'),
  },

  transport: {
    slug: 'transport',
    name: 'Transport',
    eyebrow: 'Industry · Transport',
    headline: 'Unlock ancillary revenue across every journey',
    lead: 'Monetise demand for flexibility without restructuring fare classes. Protection sits alongside your fare families rather than inside them, so it adds revenue instead of cannibalising it.',
    keyPoints: [
      'Incremental revenue per passenger, per journey',
      'Captures price-sensitive customers who never buy flexible fares',
      'No change to fare rules, pricing or operations',
      'Works across air, rail and coach booking flows',
    ],
    visual: <FareComparisonMockup />,
    stats: [
      { value: '+10–15%', label: 'Ancillary revenue uplift [placeholder — confirm range]' },
      { value: '15–25%', label: 'Typical attach rate [placeholder — confirm range]' },
      { value: 'Fully managed', label: 'Claims and customer service' },
      { value: 'Zero', label: 'Impact on your fare rules' },
    ],
    pillars: [
      {
        icon: Train,
        title: 'No cannibalisation',
        body: 'Flexible fares stay premium. Protection captures the passengers who were always going to buy the cheapest ticket.',
      },
      {
        icon: LineChart,
        title: 'Revenue strategy friendly',
        body: 'Priced separately from the fare, so it does not distort yield management or fare-class availability.',
      },
      {
        icon: ShieldCheck,
        title: 'Disruption cover included',
        body: 'Air Shield handles statutory compensation, so passengers get help without your contact centre absorbing the volume.',
      },
      {
        icon: Users,
        title: 'Lower abandonment',
        body: 'A cheap ticket plus optional flexibility beats an expensive flexible fare for the majority of leisure passengers.',
      },
    ],
    fit: [
      {
        title: 'Airlines',
        body: 'Add flexibility and disruption cover without restructuring fare families or reopening distribution agreements.',
      },
      {
        title: 'Rail operators',
        body: 'Monetise advance-purchase inventory by selling optional flexibility on top of restricted tickets.',
      },
      {
        title: 'Coach and ferry',
        body: 'A single, clear add-on that works across short-haul, seasonal and high-volume routes.',
      },
    ],
    products: ['refund-shield', 'air-shield', 'baggage-shield'],
    steps: sharedSteps('your ticketing flow'),
    faqs: sharedFaqs('ticketing'),
  },

  accommodation: {
    slug: 'accommodation',
    name: 'Accommodation',
    eyebrow: 'Industry · Accommodation',
    headline: 'Sell non-refundable rates with confidence',
    lead: 'Give guests a way to protect a non-refundable booking and you can keep pushing your best-margin rate plan without losing the cautious traveller.',
    keyPoints: [
      'Protect the margin on non-refundable rate plans',
      'Reduce cancellations handled by your front desk',
      'A clear option guests understand instantly',
      'Works for direct, OTA and channel-managed bookings',
    ],
    visual: <HotelBookingMockup />,
    stats: [
      { value: '+10–15%', label: 'Revenue per booking [placeholder — confirm range]' },
      { value: '15–25%', label: 'Typical attach rate [placeholder — confirm range]' },
      { value: 'Fully managed', label: 'Refund requests handled by Tego' },
      { value: 'Zero', label: 'Change to your rate plans' },
    ],
    pillars: [
      {
        icon: Building2,
        title: 'Best rate stays best',
        body: 'Guests buy flexibility separately, so your non-refundable rate keeps its price advantage and its margin.',
      },
      {
        icon: Wallet,
        title: 'Revenue on every stay',
        body: 'A share of each protected booking, on top of the room revenue you were already recognising.',
      },
      {
        icon: Users,
        title: 'Fewer awkward conversations',
        body: 'Cancellation requests go to us, not to your reservations team or your front desk.',
      },
      {
        icon: Globe2,
        title: 'Group and portfolio ready',
        body: 'One integration covers every property, brand and market in your portfolio.',
      },
    ],
    fit: [
      {
        title: 'Hotel groups',
        body: 'Roll a single protection offer across every property and brand from one integration.',
      },
      {
        title: 'Booking platforms',
        body: 'Expose protection on your own checkout and share the revenue with the properties you list.',
      },
      {
        title: 'Short-stay and vacation rental',
        body: 'Give owners a way to keep strict cancellation policies while still converting cautious guests.',
      },
    ],
    products: ['refund-shield', 'bundles'],
    steps: sharedSteps('your reservation flow'),
    faqs: sharedFaqs('reservation'),
  },

  events: {
    slug: 'events',
    name: 'Events',
    eyebrow: 'Industry · Events',
    headline: 'Protect ticket sales without protecting margin away',
    lead: 'Ticket buyers hesitate months before an event. A clear refundable option removes that hesitation, lifts conversion and adds revenue on every ticket sold.',
    keyPoints: [
      'Converts buyers who hesitate on long lead times',
      'Revenue on every protected ticket, not just premium tiers',
      'Requests handled by Tego, never by the box office',
      'Works for single tickets, groups and season passes',
    ],
    visual: <TicketCheckoutMockup />,
    stats: [
      { value: '+10–15%', label: 'Revenue per order [placeholder — confirm range]' },
      { value: '15–25%', label: 'Typical attach rate [placeholder — confirm range]' },
      { value: 'Fully managed', label: 'Refund requests and payouts' },
      { value: 'Zero', label: 'Change to your ticket terms' },
    ],
    pillars: [
      {
        icon: Ticket,
        title: 'Long lead times, solved',
        body: 'The further out the event, the more a buyer worries about plans changing. Protection answers that objection at the point of sale.',
      },
      {
        icon: Wallet,
        title: 'Revenue per ticket',
        body: 'Applies to every tier, not just premium seats, so uplift scales with volume rather than with price.',
      },
      {
        icon: ShieldCheck,
        title: 'Terms stay yours',
        body: 'Your ticket conditions do not change. Protection is bought separately and administered under its own terms.',
      },
      {
        icon: Users,
        title: 'Box office stays clear',
        body: 'Refund requests are routed to us, so your team is not fielding them in the week of the event.',
      },
    ],
    fit: [
      {
        title: 'Ticketing platforms',
        body: 'Expose protection across every promoter and venue on your platform from one integration.',
      },
      {
        title: 'Promoters and venues',
        body: 'Lift conversion on early on-sales without softening your own refund policy.',
      },
      {
        title: 'Festivals and multi-day events',
        body: 'High ticket values and long lead times make protection an easy decision for the buyer.',
      },
    ],
    products: ['refund-shield', 'bundles'],
    steps: sharedSteps('your ticket checkout'),
    faqs: sharedFaqs('ticketing'),
  },

  experiences: {
    slug: 'experiences',
    name: 'Experiences',
    eyebrow: 'Industry · Experiences',
    headline: 'Ancillary revenue on small baskets, at scale',
    lead: 'Tours, activities and attractions sell in volume at low ticket values. A lightweight, mobile-first protection offer adds margin to every one of those transactions.',
    keyPoints: [
      'Designed for mobile-first, low-value, high-volume baskets',
      'Priced proportionately so it converts on small orders',
      'One tap to add, no extra step in the funnel',
      'Fully managed requests, no supplier involvement',
    ],
    visual: <ExperienceMobileMockup />,
    stats: [
      { value: '+10–15%', label: 'Revenue per order [placeholder — confirm range]' },
      { value: '15–25%', label: 'Typical attach rate [placeholder — confirm range]' },
      { value: 'Mobile-first', label: 'Offer designed for small screens' },
      { value: 'Zero', label: 'Work for your suppliers' },
    ],
    pillars: [
      {
        icon: Compass,
        title: 'Built for small baskets',
        body: 'Pricing scales with order value, so the offer stays credible on a £25 activity as well as a £400 multi-day tour.',
      },
      {
        icon: Gauge,
        title: 'One tap on mobile',
        body: 'The offer is a single line in the payment sheet — no modal, no second page, no measurable drop in conversion.',
      },
      {
        icon: Wallet,
        title: 'Volume becomes margin',
        body: 'A small amount on a very large number of transactions is one of the fastest ways to add contribution in this category.',
      },
      {
        icon: Users,
        title: 'Suppliers stay out of it',
        body: 'Requests are handled centrally by us, so individual operators never deal with a refund conversation.',
      },
    ],
    fit: [
      {
        title: 'Tours and activities marketplaces',
        body: 'Add one protection offer across thousands of supplier listings without onboarding each one.',
      },
      {
        title: 'Attractions and ticketing',
        body: 'Weather and plan changes drive cancellation requests — protection turns those into a served outcome.',
      },
      {
        title: 'Multi-day and adventure travel',
        body: 'Higher basket values make protection an obvious add for the traveller.',
      },
    ],
    products: ['refund-shield', 'bundles'],
    steps: sharedSteps('your mobile checkout'),
    faqs: sharedFaqs('booking'),
  },

  platforms: {
    slug: 'platforms',
    name: 'Platforms',
    eyebrow: 'Industry · Platforms',
    headline: 'Ship protection to every merchant you host',
    lead: 'If you power checkout for other businesses, protection is a product you can offer them without building, underwriting or servicing anything yourself.',
    keyPoints: [
      'One integration exposes protection to your whole merchant base',
      'White-labelled, so it looks like part of your platform',
      'Revenue share you can split with your merchants',
      'No underwriting, claims or compliance burden on you',
    ],
    visual: <PlatformDiagramMockup />,
    stats: [
      { value: 'One API', label: 'Serves every merchant on your platform' },
      { value: 'White-label', label: 'Presented under your brand' },
      { value: 'Fully managed', label: 'Claims, compliance and payouts' },
      { value: 'Per-merchant', label: 'Reporting and settlement' },
    ],
    pillars: [
      {
        icon: Plug,
        title: 'Built for multi-tenant',
        body: 'Enable protection per merchant, with per-merchant configuration, pricing and reporting from the same integration.',
      },
      {
        icon: ShieldCheck,
        title: 'Regulated complexity, absorbed',
        body: 'Underwriting, disclosure and market-specific requirements are handled by us and our regulated partners.',
      },
      {
        icon: Wallet,
        title: 'A revenue line you can share',
        body: 'Keep a margin, pass a margin to your merchants, or both — the split is configurable and reconciled automatically.',
      },
      {
        icon: Globe2,
        title: 'Scales with your roadmap',
        body: 'New markets and new products switch on through configuration rather than another engineering cycle.',
      },
    ],
    fit: [
      {
        title: 'Booking engines and PMS',
        body: 'Add an ancillary your customers already want, without expanding your own product surface.',
      },
      {
        title: 'Marketplaces',
        body: 'One protection layer across every seller, with settlement handled per seller.',
      },
      {
        title: 'Payment and checkout providers',
        body: 'Attach protection at the payment step you already own, as a value-add for your merchants.',
      },
    ],
    products: ['refund-shield', 'baggage-shield', 'bundles'],
    steps: sharedSteps('your merchant checkout'),
    faqs: sharedFaqs('checkout'),
  },
};

export const industryOrder = [
  'travel',
  'transport',
  'accommodation',
  'events',
  'experiences',
  'platforms',
];
