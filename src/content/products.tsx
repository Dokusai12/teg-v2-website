import type { ReactNode } from 'react';
import {
  ShieldCheck,
  Gauge,
  Globe2,
  Wallet,
  Plane,
  Luggage,
  Layers,
  Clock,
  BadgeCheck,
  LineChart,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import {
  CheckoutCard,
  BaggageClaimFlow,
  FlightStatusStrip,
  BundleStack,
} from '@/components/system/visuals';

export interface ProductContent {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  lead: string;
  keyPoints: string[];
  visual: ReactNode;
  heroStats: { value: string; label: string }[];
  pillars: { icon: LucideIcon; title: string; body: string }[];
  steps: { title: string; description: string }[];
  covered: string[];
  notCovered: string[];
  coverageNote: string;
  integration: { title: string; body: string }[];
  code: ReactNode;
  commercials: { label: string; value: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

const sharedIntegration = [
  {
    title: 'One API, one contract',
    body: 'Quote, purchase and reconcile through the same endpoints you already use for the rest of the suite. Adding a second product later needs no new integration.',
  },
  {
    title: 'Hosted or headless',
    body: 'Drop in our offer component and inherit your own styling, or call the API directly and build the UI yourself. Both routes support the same pricing and reporting.',
  },
  {
    title: 'Localised everywhere you sell',
    body: 'Multi-currency pricing, translated copy and per-market disclosure are handled inside the integration, so the same code works across all your storefronts.',
  },
  {
    title: 'Reporting from day one',
    body: 'Attach rate, revenue per booking and settlement are visible in real time, broken down by route, market and device so you can see what is working.',
  },
];

const codeBlock = (product: string) => (
  <div className="code-block rounded-xl p-5">
    <pre className="overflow-x-auto text-[13px] leading-relaxed">
      <code>
        <span className="cc">// quote at checkout</span>
        {'\n'}
        <span className="ck">const</span> offer = <span className="ck">await</span> tego.
        <span className="cp">quote</span>({'{'}
        {'\n  '}product: <span className="cs">'{product}'</span>,
        {'\n  '}booking: <span className="cs">'BK-48219'</span>,
        {'\n  '}value: <span className="cn">412.00</span>,
        {'\n  '}currency: <span className="cs">'GBP'</span>
        {'\n'}
        {'}'});
        {'\n\n'}
        <span className="cc">// attach on payment</span>
        {'\n'}
        <span className="ck">await</span> tego.<span className="cp">purchase</span>(offer.id);
      </code>
    </pre>
  </div>
);

const sharedCommercials = (share: string) => [
  {
    label: 'Your revenue',
    value: share,
    detail: 'A transparent share of every sale, agreed up front and reconciled automatically.',
  },
  {
    label: 'Your risk',
    value: 'None',
    detail: 'Underwritten and serviced through regulated partners, with nothing on your balance sheet.',
  },
  {
    label: 'Your effort',
    value: 'Zero claims',
    detail: 'Customer requests, assessments and payouts are handled end to end by our team.',
  },
];

export const products: Record<string, ProductContent> = {
  'refund-shield': {
    slug: 'refund-shield',
    name: 'Refund Shield',
    eyebrow: 'Flagship product',
    headline: 'Turn checkout hesitation into revenue',
    lead: 'Let customers upgrade to a refundable booking at the moment they pay. They get certainty if plans change; you earn a high-margin share of every sale without touching your own refund policy.',
    keyPoints: [
      'A refundable upgrade customers understand in one line',
      'Removes hesitation at the highest-intent moment in the funnel',
      'Requests handled end to end by Tego, never by your support desk',
      'Live attach rate and revenue reporting from the first booking',
    ],
    visual: <CheckoutCard />,
    heroStats: [
      { value: 'Days', label: 'Typical time to a live integration' },
      { value: '50+', label: 'Markets with localised pricing and copy' },
      { value: '0', label: 'Claims handled by your team' },
    ],
    pillars: [
      {
        icon: Wallet,
        title: 'High-margin ancillary',
        body: 'Refundable upgrades carry some of the strongest margins in travel retail. You keep an agreed share of every sale, on top of the booking you were already making.',
      },
      {
        icon: Gauge,
        title: 'Priced per booking',
        body: 'The upgrade price is calculated from trip value, timing and route, so the offer stays proportionate and converts across both low and high basket values.',
      },
      {
        icon: ShieldCheck,
        title: 'Your policy stays yours',
        body: 'Refund Shield sits alongside your fare rules rather than replacing them. Non-refundable inventory stays non-refundable; the customer buys the flexibility separately.',
      },
      {
        icon: Users,
        title: 'Customer-facing, fully branded',
        body: 'The request journey carries your brand end to end, so the experience feels like part of your product rather than a third-party handoff.',
      },
    ],
    steps: [
      {
        title: 'Offer at checkout',
        description: 'The refundable upgrade appears in your payment step, priced for that specific booking.',
      },
      {
        title: 'Customer opts in',
        description: 'A single checkbox adds the upgrade. It is confirmed on the booking and in the confirmation email.',
      },
      {
        title: 'Plans change',
        description: 'The customer submits a request through the branded portal with supporting evidence.',
      },
      {
        title: 'Refund is settled',
        description: 'Eligible requests are assessed and refunded to the customer directly, under the published terms.',
      },
    ],
    covered: [
      'Illness or injury affecting the traveller',
      'Family emergency or bereavement',
      'Home emergency preventing travel',
      'Jury service, court summons or armed forces recall',
      'Transport failure on the way to departure',
    ],
    notCovered: [
      'Change of mind or a cheaper fare found later',
      'Circumstances known at the time of booking',
      'Requests submitted outside the published window',
    ],
    coverageNote:
      'Covered reasons and evidence requirements vary by market and are set out in the customer terms.',
    integration: sharedIntegration,
    code: codeBlock('refund_shield'),
    commercials: sharedCommercials('Revenue share'),
    faqs: [
      {
        question: 'Does this change our own refund policy?',
        answer:
          'No. Your fare rules are unchanged. Refund Shield is an optional upgrade the customer buys on top of the booking, and it is administered entirely by us under its own terms.',
      },
      {
        question: 'Who pays the refund?',
        answer:
          'We do, through our regulated partners. The refund is paid to the customer directly and never comes out of your revenue.',
      },
      {
        question: 'Where should the offer sit in checkout?',
        answer:
          'The payment step converts best, because intent is highest and the price is already anchored. We test placement and wording with you after launch and iterate on the results.',
      },
      {
        question: 'How quickly can we launch?',
        answer:
          'Most partners go live in days using the hosted offer component. Teams building their own UI typically ship within one sprint.',
      },
    ],
  },

  'air-shield': {
    slug: 'air-shield',
    name: 'Air Shield',
    eyebrow: 'Disruption product',
    headline: 'Turn flight disruption into revenue',
    lead: 'Give travellers a simple way to recover what they are owed when flights are delayed or cancelled, and earn on every booking that opts in, without adding a single step to your operation.',
    keyPoints: [
      'Compensation support customers understand at the point of sale',
      'Eligibility assessed against live flight data, not paperwork',
      'Claims pursued with the airline by our team, including escalation',
      'Sits alongside fare families without cannibalising them',
    ],
    visual: <FlightStatusStrip />,
    heroStats: [
      { value: 'Live data', label: 'Disruption verified automatically' },
      { value: 'EU261+', label: 'Assessed under applicable regulation' },
      { value: '0', label: 'Claims handled by your team' },
    ],
    pillars: [
      {
        icon: Plane,
        title: 'Built on real entitlement',
        body: 'Air Shield is designed around how airline compensation actually works. Eligibility is assessed under the regulation that applies to the route, not a vague promise.',
      },
      {
        icon: Clock,
        title: 'Verified, not filled in',
        body: 'Delays and cancellations are confirmed against live flight status, so the customer is not asked to prove something we can already see.',
      },
      {
        icon: BadgeCheck,
        title: 'Escalation included',
        body: 'When an airline resists a valid claim, it is pursued through our legal partners. The customer never has to chase it and neither do you.',
      },
      {
        icon: LineChart,
        title: 'Measurable uplift',
        body: 'Attach rate and revenue per booking are reported per route and market, so you can see exactly where disruption cover is landing.',
      },
    ],
    steps: [
      {
        title: 'Added at booking',
        description: 'Air Shield is offered in your checkout alongside the fare, priced for that itinerary.',
      },
      {
        title: 'Disruption happens',
        description: 'A delay, cancellation or denied boarding is detected and the customer is prompted to start a claim.',
      },
      {
        title: 'We pursue the airline',
        description: 'The claim is filed and managed directly with the carrier under the applicable regulation.',
      },
      {
        title: 'Compensation is paid',
        description: 'Recovered compensation is paid to the customer. Contested claims are escalated through legal partners.',
      },
    ],
    covered: [
      'Delays beyond the qualifying threshold for the route',
      'Cancellations',
      'Missed connections on a single itinerary',
      'Denied boarding not caused by the passenger',
    ],
    notCovered: [
      'Disruption caused by the passenger (late to gate, invalid documents)',
      'Claims already settled directly with the airline',
      'Events outside the regulatory scope of the route',
    ],
    coverageNote:
      'Qualifying thresholds and entitlements follow the regulation applicable to each route.',
    integration: sharedIntegration,
    code: codeBlock('air_shield'),
    commercials: sharedCommercials('Revenue share'),
    faqs: [
      {
        question: 'Does this compete with our own disruption policy?',
        answer:
          'No. Air Shield helps the customer recover statutory compensation from the operating carrier. It sits alongside anything you already offer and does not change your obligations.',
      },
      {
        question: 'What happens if the airline refuses?',
        answer:
          'Valid claims are escalated through our legal partners at no cost to the customer or to you.',
      },
      {
        question: 'Will it cannibalise our fare families?',
        answer:
          'It has no overlap with fare flexibility. It addresses compensation for disruption, which fare families do not cover. It is priced and positioned separately in checkout.',
      },
      {
        question: 'Which routes are supported?',
        answer:
          'Coverage follows the regulation applicable to each route. Our team confirms the supported set for your network during onboarding.',
      },
    ],
  },

  'baggage-shield': {
    slug: 'baggage-shield',
    name: 'Baggage Shield',
    eyebrow: 'Add-on product',
    headline: 'Turn baggage disruption into trust, and revenue',
    lead: 'Support travellers the moment a bag goes missing, with active recovery and fixed compensation if it does not arrive, and earn on every booking that adds it.',
    keyPoints: [
      'Active recovery in the first 96 hours, run by our team',
      'Fixed compensation if the bag is not returned in time',
      'Clear reassurance right before payment, where it converts',
      'Fully branded claims experience, zero operational burden',
    ],
    visual: <BaggageClaimFlow />,
    heroStats: [
      { value: '0–96h', label: 'Active recovery window' },
      { value: 'Fixed', label: 'Compensation amount, known up front' },
      { value: '0', label: 'Claims handled by your team' },
    ],
    pillars: [
      {
        icon: Luggage,
        title: 'Recovery first',
        body: 'Most delayed bags come back. We work directly with airlines and handling agents to track and return them before compensation is ever needed.',
      },
      {
        icon: Clock,
        title: 'A clear 96-hour promise',
        body: 'If the bag is returned within 96 hours the service is complete. If it is not, fixed compensation is paid. The customer knows the outcome before they buy.',
      },
      {
        icon: ShieldCheck,
        title: 'Works on any carrier',
        body: 'Baggage Shield applies across airlines and fare types, so a single offer covers the whole of your inventory without exceptions to explain.',
      },
      {
        icon: Sparkles,
        title: 'Trust at the right moment',
        body: 'Placed just before payment, it reassures exactly where hesitation peaks, which is also where attach rate is highest.',
      },
    ],
    steps: [
      {
        title: 'Added at checkout',
        description: 'The traveller adds Baggage Shield with one tap while paying for the trip.',
      },
      {
        title: 'A bag goes missing',
        description: 'The customer reports the disruption and shares the airline reference.',
      },
      {
        title: 'Active recovery, 0–96 hours',
        description: 'We work with the airline and handling agents to locate and return the bag.',
      },
      {
        title: 'Returned or compensated',
        description: 'Returned within 96 hours and the service is complete. Otherwise, fixed compensation is paid, subject to terms.',
      },
    ],
    covered: [
      'Delayed baggage on a checked itinerary',
      'Misrouted baggage requiring recovery',
      'Non-return within the 96-hour window',
      'Bags checked on any airline or fare type',
    ],
    notCovered: [
      'Damage to the bag or its contents',
      'Items removed from a bag that is otherwise returned',
      'Claims without an airline property irregularity report',
    ],
    coverageNote:
      'Compensation amounts and evidence requirements are set out in the customer terms.',
    integration: sharedIntegration,
    code: codeBlock('baggage_shield'),
    commercials: sharedCommercials('Revenue share'),
    faqs: [
      {
        question: 'Is this baggage insurance?',
        answer:
          'It is a recovery and compensation service delivered through our regulated partners. The customer gets active help finding the bag first, and a fixed payment if it is not returned in time.',
      },
      {
        question: 'What does the customer have to provide?',
        answer:
          'The airline property irregularity report and their booking reference. Everything after that is handled by our team.',
      },
      {
        question: 'Does it work with codeshares and connections?',
        answer:
          'Yes. Recovery is run against the itinerary rather than a single carrier, including connecting and codeshare segments.',
      },
      {
        question: 'How is it priced?',
        answer:
          'Per booking, based on itinerary and destination, so the offer stays proportionate to the trip.',
      },
    ],
  },

  bundles: {
    slug: 'bundles',
    name: 'Bundles',
    eyebrow: 'Packaged offer',
    headline: 'One offer, three protections, a bigger basket',
    lead: 'Package Refund Shield, Air Shield and Baggage Shield into a single discounted offer. Fewer decisions for the traveller, materially higher revenue per booking for you.',
    keyPoints: [
      'One decision instead of three, at the point of payment',
      'Bundled pricing raises perceived value and attach rate',
      'A single integration surface covers all three products',
      'Unified reporting and settlement across the whole suite',
    ],
    visual: <BundleStack />,
    heroStats: [
      { value: '3-in-1', label: 'Refund, Air and Baggage Shield' },
      { value: '1 call', label: 'Same API, same contract' },
      { value: '0', label: 'Claims handled by your team' },
    ],
    pillars: [
      {
        icon: Layers,
        title: 'Simpler decisions convert',
        body: 'Three separate upsells compete with each other. One bundled offer removes the comparison and lifts the share of customers who protect their trip at all.',
      },
      {
        icon: Wallet,
        title: 'Bigger basket, better margin',
        body: 'The bundled discount lowers the price per product while raising the total added to the booking, so combined revenue per sale exceeds the standalone equivalent.',
      },
      {
        icon: Globe2,
        title: 'One surface to maintain',
        body: 'A single quote and purchase call returns the whole bundle. Adding or removing a product later is a configuration change, not an engineering project.',
      },
      {
        icon: LineChart,
        title: 'Reporting that ties out',
        body: 'Attach rate, revenue and settlement are reported for the bundle as a whole and per component, so you can see what is actually driving the uplift.',
      },
    ],
    steps: [
      {
        title: 'Choose the mix',
        description: 'Pick which products belong in the bundle and the discount you want to present.',
      },
      {
        title: 'One offer at checkout',
        description: 'The traveller sees a single protected-trip option with a clear combined price.',
      },
      {
        title: 'One click to attach',
        description: 'Accepting the bundle activates all included products against the booking.',
      },
      {
        title: 'We service all of it',
        description: 'Every request across the bundle is handled by our team, under one set of customer terms.',
      },
    ],
    covered: [
      'Refund Shield: refundable upgrade on the booking',
      'Air Shield: flight disruption compensation support',
      'Baggage Shield: baggage recovery and fixed compensation',
      'Configurable bundle pricing per market',
    ],
    notCovered: [
      'Anything excluded by the individual product terms',
      'Products not enabled on your account',
    ],
    coverageNote:
      'Each component keeps its own terms and exclusions inside the bundle.',
    integration: sharedIntegration,
    code: codeBlock('bundle_complete'),
    commercials: sharedCommercials('Revenue share'),
    faqs: [
      {
        question: 'Can customers still buy products individually?',
        answer:
          'Yes. You can present the bundle as the headline option and keep single products available, or run bundles exclusively. Both are supported by the same integration.',
      },
      {
        question: 'Does the discount reduce our revenue?',
        answer:
          'The per-product price is lower, but the total attached to the booking is higher and more customers attach at all, so revenue per booking typically increases. We model this against your volumes before launch.',
      },
      {
        question: 'Can the bundle differ by market?',
        answer:
          'Yes. Composition and pricing are configurable per market and route type without a code change on your side.',
      },
      {
        question: 'How are requests handled across products?',
        answer:
          'Through one branded journey. The customer describes what happened and we route it to the right product internally.',
      },
    ],
  },
};

export const productOrder = ['refund-shield', 'air-shield', 'baggage-shield', 'bundles'];
