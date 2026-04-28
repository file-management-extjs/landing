import { useState } from 'react';
import Icon from './Icon.jsx';

const endpoint = import.meta.env.VITE_LANDING_CONTACT_ENDPOINT || '';

const initialValues = {
  name: '',
  email: '',
  company: '',
  deployment: 'Cloud',
  priority: 'Planning',
  message: '',
};

export default function LeadForm({ mode = 'contact' }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');

  const title = mode === 'feature' ? 'Feature request' : 'Contact request';
  const messageLabel = mode === 'feature' ? 'Requested capability' : 'How can we help?';
  const messagePlaceholder =
    mode === 'feature'
      ? 'Describe the workflow, users, files, integrations, and the impact this feature would unlock.'
      : 'Tell us about your team size, deployment preference, timeline, and any security requirements.';

  const updateValue = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const payload = {
      ...values,
      type: mode,
      submittedAt: new Date().toISOString(),
    };

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          setStatus('error');
          return;
        }
      } catch (error) {
        console.error(error);
        setStatus('error');
        return;
      }
    } else {
      const existing = JSON.parse(window.localStorage.getItem('landingRequests') || '[]');
      window.localStorage.setItem('landingRequests', JSON.stringify([...existing, payload]));
    }

    setValues(initialValues);
    setStatus('success');
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" value={values.name} onChange={updateValue} autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" value={values.email} onChange={updateValue} autoComplete="email" required />
        </label>
        <label>
          <span>Company</span>
          <input name="company" value={values.company} onChange={updateValue} autoComplete="organization" />
        </label>
        <label>
          <span>Deployment</span>
          <select name="deployment" value={values.deployment} onChange={updateValue}>
            <option>Cloud</option>
            <option>Private cloud</option>
            <option>On-prem air-gapped</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          <span>{mode === 'feature' ? 'Priority' : 'Timeline'}</span>
          <select name="priority" value={values.priority} onChange={updateValue}>
            <option>Planning</option>
            <option>This quarter</option>
            <option>Urgent</option>
            <option>Researching</option>
          </select>
        </label>
        <label className="wide">
          <span>{messageLabel}</span>
          <textarea
            name="message"
            value={values.message}
            onChange={updateValue}
            placeholder={messagePlaceholder}
            rows="7"
            required
          />
        </label>
      </div>

      <div className="form-footer">
        <button className="primary-button" type="submit" disabled={status === 'submitting'}>
          <span>{status === 'submitting' ? 'Sending' : `Send ${title}`}</span>
          <Icon name="Send" size={17} />
        </button>
        {status === 'success' && <p className="form-status success">Request captured. The team can review it from the landing service handoff.</p>}
        {status === 'error' && <p className="form-status error">The request could not be sent. Please try again.</p>}
      </div>
    </form>
  );
}
