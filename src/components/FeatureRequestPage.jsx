import Icon from './Icon.jsx';
import LeadForm from './LeadForm.jsx';

const requestTypes = [
  {
    icon: 'Workflow',
    title: 'Workflow automation',
    text: 'Approval paths, intake queues, review statuses, and lifecycle actions around files.',
  },
  {
    icon: 'BrainCircuit',
    title: 'Content intelligence',
    text: 'Classification, extraction, summaries, sensitivity detection, and enrichment behavior.',
  },
  {
    icon: 'ServerCog',
    title: 'Deployment capability',
    text: 'Air-gapped operations, backup policies, integrations, monitoring, and admin controls.',
  },
];

export default function FeatureRequestPage() {
  return (
    <section className="subpage">
      <div className="subpage-hero request-hero">
        <div className="page-shell subpage-hero-content">
          <p className="eyebrow">Ask for a new feature</p>
          <h1>Shape the next file workflow</h1>
          <p>
            Send the use case, affected users, deployment context, and urgency so the product team can evaluate the
            request with enough business detail.
          </p>
        </div>
      </div>

      <div className="page-shell request-layout">
        <aside className="request-sidebar">
          <p className="eyebrow">Good requests include</p>
          {requestTypes.map((type) => (
            <article className="mini-feature" key={type.title}>
              <Icon name={type.icon} size={22} />
              <div>
                <h2>{type.title}</h2>
                <p>{type.text}</p>
              </div>
            </article>
          ))}
        </aside>

        <section className="form-panel">
          <h2>Request details</h2>
          <p>
            Prioritize the actual workflow and the outcome it should produce. Technical implementation can follow once
            the business problem is clear.
          </p>
          <LeadForm mode="feature" />
        </section>
      </div>
    </section>
  );
}
