import { useState } from 'react';
import Icon from './Icon.jsx';
import AppScreenshot from './AppScreenshot.jsx';
import { deployments, docSections, featureCards, planGroups, workflowSteps } from '../data.js';

export default function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <TrustStrip />
      <FeatureSection navigate={navigate} />
      <WorkflowSection />
      <PlanSection navigate={navigate} />
      <DeploymentSection />
      <DocsPreview navigate={navigate} />
      <FinalCta navigate={navigate} />
    </>
  );
}

function Hero({ navigate }) {
  return (
    <section className="hero-section">
      <div className="product-scene" aria-hidden="true">
        <AppScreenshot variant="workspace" compact />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content page-shell">
        <p className="eyebrow">Secure file operations for individuals, teams, and regulated organizations</p>
        <h1>File Management Platform</h1>
        <p className="hero-copy">
          A modern workspace for storing, scanning, sharing, converting, searching, and governing business files across
          cloud, private cloud, and air-gapped deployments.
        </p>
        <div className="hero-actions">
          <button className="primary-button" type="button" onClick={() => navigate('/#plans')}>
            <span>Compare plans</span>
            <Icon name="ArrowRight" size={18} />
          </button>
          <button className="secondary-button" type="button" onClick={() => navigate('/docs')}>
            <span>Read docs</span>
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
        <div className="hero-metrics" aria-label="Platform highlights">
          <span>Content intelligence</span>
          <span>Secure sharing</span>
          <span>Storage insights</span>
          <span>Air-gapped ready</span>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="signal-strip">
      <div className="page-shell signal-grid">
        <div>
          <strong>Personal</strong>
          <span>Private vaults, previews, search, and secure links.</span>
        </div>
        <div>
          <strong>Organization</strong>
          <span>Teams, workspaces, audit, policies, and reviews.</span>
        </div>
        <div>
          <strong>Deployment</strong>
          <span>Managed cloud, private cloud, or offline infrastructure.</span>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ navigate }) {
  return (
    <section className="section-block" id="features">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Everything around the file, not only the file itself</h2>
          <p>
            The platform connects storage, review, security, conversion, discovery, and reporting so teams can manage
            document work without stitching together fragile tools.
          </p>
        </div>

        <div className="feature-grid">
          {featureCards.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="icon-box">
                <Icon name={feature.icon} size={22} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <button className="feature-link" type="button" onClick={() => navigate(`/features/${feature.slug}`)}>
                <span>View feature</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section-block workflow-band">
      <div className="page-shell workflow-layout">
        <div className="section-heading compact">
          <p className="eyebrow">Workflow</p>
          <h2>From upload to governed archive</h2>
          <p>
            Built for everyday file operations and the compliance-heavy moments where visibility, proof, and control
            matter.
          </p>
        </div>
        <div className="timeline">
          {workflowSteps.map((step, index) => (
            <div className="timeline-row" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanSection({ navigate }) {
  const [audience, setAudience] = useState('organization');
  const [billing, setBilling] = useState('monthly');
  const plans = planGroups[audience];

  return (
    <section className="section-block" id="plans">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Plans and pricing</p>
          <h2>Choose personal or organization models</h2>
          <p>
            Start with individual file productivity, then move into governed team workspaces, private infrastructure,
            and enterprise deployment support when the organization needs it.
          </p>
        </div>

        <div className="plan-controls" aria-label="Pricing controls">
          <div className="segmented-control">
            <button className={audience === 'personal' ? 'active' : ''} type="button" onClick={() => setAudience('personal')}>
              Personal
            </button>
            <button
              className={audience === 'organization' ? 'active' : ''}
              type="button"
              onClick={() => setAudience('organization')}
            >
              Organization
            </button>
          </div>
          <div className="segmented-control">
            <button className={billing === 'monthly' ? 'active' : ''} type="button" onClick={() => setBilling('monthly')}>
              Monthly
            </button>
            <button className={billing === 'yearly' ? 'active' : ''} type="button" onClick={() => setBilling('yearly')}>
              Yearly
            </button>
          </div>
        </div>

        <div className={`plan-grid ${audience}`}>
          {plans.map((plan) => (
            <article className={`plan-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="plan-badge">Recommended</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price-row">
                <strong>{plan.price[billing]}</strong>
                <span>{plan.suffix}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="Check" size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={plan.featured ? 'primary-button full' : 'secondary-button full'} type="button" onClick={() => navigate('/contact')}>
                <span>{plan.cta}</span>
                <Icon name="ArrowRight" size={17} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeploymentSection() {
  return (
    <section className="section-block deployment-section" id="deployments">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Deployments</p>
          <h2>Cloud speed or on-prem control</h2>
          <p>
            Keep deployment choices aligned with the way your data is governed, from fast cloud onboarding to offline
            environments with strict operational boundaries.
          </p>
        </div>

        <div className="deployment-grid">
          {deployments.map((item) => (
            <article className="deployment-card" key={item.title}>
              <span className="deployment-badge">{item.badge}</span>
              <Icon name={item.icon} size={30} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DocsPreview({ navigate }) {
  return (
    <section className="section-block docs-preview">
      <div className="page-shell docs-layout">
        <div className="section-heading compact">
          <p className="eyebrow">Documentation</p>
          <h2>Platform documentation for operators and builders</h2>
          <p>
            Publish onboarding paths, deployment runbooks, API references, and security guidance from the same public
            landing experience.
          </p>
          <button className="primary-button" type="button" onClick={() => navigate('/docs')}>
            <span>Open documentation</span>
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
        <div className="doc-grid">
          {docSections.map((section) => (
            <article className="doc-card" key={section.title}>
              <Icon name={section.icon} size={22} />
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ navigate }) {
  return (
    <section className="final-cta">
      <div className="page-shell final-cta-inner">
        <div>
          <p className="eyebrow">Product feedback</p>
          <h2>Need a workflow the platform does not cover yet?</h2>
          <p>
            Send a feature request with use case, deployment model, and priority so it can be evaluated against the
            product roadmap.
          </p>
        </div>
        <div className="final-actions">
          <button className="primary-button" type="button" onClick={() => navigate('/request-feature')}>
            <span>Request feature</span>
            <Icon name="MessageSquarePlus" size={18} />
          </button>
          <button className="secondary-button light" type="button" onClick={() => navigate('/contact')}>
            <span>Contact us</span>
            <Icon name="Mail" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
