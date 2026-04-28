import Icon from './Icon.jsx';
import LeadForm from './LeadForm.jsx';

const contactCards = [
  {
    icon: 'BadgeCheck',
    title: 'Plan selection',
    text: 'Compare personal, team, business, and enterprise models for the way your users collaborate.',
  },
  {
    icon: 'LockKeyhole',
    title: 'Security review',
    text: 'Discuss access policy, scanning, audit, storage, retention, and air-gapped operating requirements.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Deployment support',
    text: 'Map infrastructure, migration, backup, and rollout needs before production launch.',
  },
];

export default function ContactPage() {
  return (
    <section className="subpage">
      <div className="subpage-hero contact-hero">
        <div className="page-shell subpage-hero-content">
          <p className="eyebrow">Contact us</p>
          <h1>Plan your file platform rollout</h1>
          <p>
            Reach out for pricing, deployment planning, documentation gaps, security reviews, or a guided evaluation.
          </p>
        </div>
      </div>

      <div className="page-shell contact-layout">
        <section className="contact-options">
          {contactCards.map((card) => (
            <article className="contact-card" key={card.title}>
              <Icon name={card.icon} size={24} />
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
          <div className="contact-direct">
            <div>
              <Icon name="Mail" size={22} />
              <span>sales@file-management.example</span>
            </div>
            <div>
              <Icon name="Phone" size={22} />
              <span>Schedule a deployment call</span>
            </div>
          </div>
        </section>

        <section className="form-panel">
          <h2>Contact details</h2>
          <p>Tell us what you are planning and which deployment model fits your environment.</p>
          <LeadForm mode="contact" />
        </section>
      </div>
    </section>
  );
}
