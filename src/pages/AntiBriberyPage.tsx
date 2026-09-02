import { LegalLayout } from '@/components/system/LegalLayout';

export default function AntiBriberyPage() {
  return (
    <LegalLayout
      title="Anti-Bribery and Corruption Policy"
      
      intro="Our zero-tolerance approach to bribery and corruption."
    >
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
            Tego Group Limited is committed to conducting business ethically, transparently, and in compliance with all applicable anti-bribery and anti-corruption laws, including the UK Bribery Act 2010. We maintain a zero-tolerance approach to bribery and corruption.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">1. Scope</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            This policy applies to all employees, contractors, and any third parties acting on behalf of Tego Group Limited.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">2. Prohibited conduct</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">The following is strictly prohibited:</p>
          <ul className="list-disc pl-6 text-[15px] text-muted-foreground space-y-2 mb-6">
            <li>Offering, promising, giving, requesting, or accepting any bribe</li>
            <li>Facilitating payments intended to expedite routine governmental or business actions</li>
            <li>Providing or accepting gifts, hospitality, or entertainment intended to improperly influence a business decision</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">3. Gifts and hospitality</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Reasonable and proportionate hospitality may be permitted where it is lawful, appropriate, and not intended to influence decision-making. Any such activity must be transparent and, where appropriate, properly recorded.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">4. Reporting concerns</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Any concerns relating to bribery or corruption should be reported promptly via{' '}
            <a href="mailto:hello@tego-group.com" className="text-accent hover:underline">hello@tego-group.com</a>. All reports will be treated seriously and handled appropriately.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">5. Compliance and enforcement</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">
            Failure to comply with this policy may result in appropriate action, including termination of business relationships or contracts.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3">6. Review</h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-0">
            We will review and update this policy periodically to ensure it remains effective and aligned with our business activities.
          </p>
    </LegalLayout>
  );
}
