import AppScreenshot from './AppScreenshot.jsx';
import Icon from './Icon.jsx';
import { featurePages } from '../data.js';

export default function FeaturePage({ feature, navigate }) {
  const related = featurePages.filter((item) => item.slug !== feature.slug).slice(0, 3);

  return (
    <section className="subpage feature-detail-page">
      <div className="subpage-hero feature-hero">
        <div className="page-shell feature-hero-layout">
          <div className="subpage-hero-content">
            <p className="eyebrow">Feature</p>
            <h1>{feature.pageTitle}</h1>
            <p>{feature.pageIntro}</p>
            <button className="primary-button" type="button" onClick={() => navigate('/contact')}>
              <span>Discuss this workflow</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
          <div className="feature-hero-icon">
            <Icon name={feature.icon} size={42} />
          </div>
        </div>
      </div>

      <div className="page-shell feature-detail-layout">
        <section className="feature-image-panel">
          <AppScreenshot variant={feature.imageVariant} />
        </section>

        <aside className="feature-proof-panel">
          <p className="eyebrow">How it works in the app</p>
          <h2>{feature.title}</h2>
          <ul className="check-list">
            {feature.bullets.map((bullet) => (
              <li key={bullet}>
                <Icon name="Check" size={17} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <button className="secondary-button full" type="button" onClick={() => navigate('/request-feature')}>
            <span>Request an enhancement</span>
            <Icon name="MessageSquarePlus" size={17} />
          </button>
        </aside>
      </div>

      <section className="section-block related-features">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">Related features</p>
            <h2>Keep exploring the platform</h2>
          </div>
          <div className="feature-grid">
            {related.map((item) => (
              <article className="feature-card" key={item.slug}>
                <span className="icon-box">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="feature-link" type="button" onClick={() => navigate(`/features/${item.slug}`)}>
                  <span>View feature</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
