import Icon from './Icon.jsx';
import { docSections } from '../data.js';

const apiTopics = [
  'Authentication and session lifecycle',
  'Files, folders, previews, and conversions',
  'Sharing, invitations, and signed links',
  'Search, content intelligence, and storage insights',
];

const runbookItems = [
  'Configure MongoDB, Redis, object storage, and virus scanning',
  'Select cloud, private cloud, or air-gapped release process',
  'Define backup, restore, audit export, and retention cadence',
  'Validate upload, preview, sharing, search, and scan workflows',
];

export default function DocsPage({ navigate }) {
  return (
    <section className="subpage">
      <div className="subpage-hero docs-hero">
        <div className="page-shell subpage-hero-content">
          <p className="eyebrow">Platform documentation</p>
          <h1>Operate, extend, and secure the file platform</h1>
          <p>
            Documentation paths for administrators, developers, security teams, and deployment owners planning a
            production file management rollout.
          </p>
          <button className="primary-button" type="button" onClick={() => navigate('/contact')}>
            <span>Ask for deployment review</span>
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>

      <div className="page-shell doc-page-grid">
        {docSections.map((section) => (
          <article className="doc-topic" key={section.title}>
            <Icon name={section.icon} size={26} />
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </div>

      <div className="page-shell split-section">
        <section className="plain-panel">
          <p className="eyebrow">API reference</p>
          <h2>Integration topics</h2>
          <ul className="check-list">
            {apiTopics.map((topic) => (
              <li key={topic}>
                <Icon name="Check" size={17} />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <pre className="code-sample">
            <code>{`GET /api/files
POST /api/files/upload
GET /api/files/:id/preview
GET /api/storage-insights/summary`}</code>
          </pre>
        </section>

        <section className="plain-panel accent-panel">
          <p className="eyebrow">Runbook</p>
          <h2>Production readiness</h2>
          <ul className="check-list">
            {runbookItems.map((item) => (
              <li key={item}>
                <Icon name="Check" size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
