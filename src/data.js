export const navItems = [
  { label: 'Features', to: '/#features' },
  { label: 'Plans', to: '/#plans' },
  { label: 'Deployments', to: '/#deployments' },
  { label: 'Docs', to: '/docs' },
  { label: 'Request feature', to: '/request-feature' },
  { label: 'Contact', to: '/contact' },
];

export const featureCards = [
  {
    slug: 'workspace',
    icon: 'FolderKanban',
    title: 'Unified file workspace',
    text: 'Organize folders, shared workspaces, uploads, previews, and review queues in one secure operating surface.',
    imageVariant: 'workspace',
    pageTitle: 'A real workspace for daily file operations',
    pageIntro:
      'The workspace gives users one place to browse folders, open files, upload batches, create folders, and keep recent activity visible.',
    bullets: ['Left navigation mirrors the main app modules', 'Recent activity stays visible beside workspace totals', 'Users can move from dashboard to File Explorer quickly'],
  },
  {
    slug: 'content-intelligence',
    icon: 'BrainCircuit',
    title: 'Content intelligence',
    text: 'Extract summaries, classify documents, detect sensitive content, and route files into the right workflow.',
    imageVariant: 'intelligence',
    pageTitle: 'Understand file content before people open it',
    pageIntro:
      'Content intelligence enriches files with scan state, classification, extracted context, and review signals that teams can act on.',
    bullets: ['Classify documents into useful business categories', 'Surface risky or sensitive files for attention', 'Feed review queues and workspace health signals'],
  },
  {
    slug: 'secure-sharing',
    icon: 'ShieldCheck',
    title: 'Security-first sharing',
    text: 'Use signed links, access controls, audit history, antivirus scanning, and workspace policies for every file exchange.',
    imageVariant: 'security',
    pageTitle: 'Share files with controls, evidence, and policy',
    pageIntro:
      'Sharing is designed around access, expiry, scan status, and auditability instead of uncontrolled document forwarding.',
    bullets: ['Protect shared files with password and access policy', 'Track who shared, viewed, or downloaded an item', 'Keep virus scanning and review status in the flow'],
  },
  {
    slug: 'storage-insights',
    icon: 'BarChart3',
    title: 'Storage insights',
    text: 'Track storage growth, hot folders, file mix, usage patterns, and cleanup opportunities without manual inventory work.',
    imageVariant: 'storage',
    pageTitle: 'See storage composition and cleanup opportunities',
    pageIntro:
      'Storage insights turn the existing workspace totals into a readable picture of file types, size concentration, and protected content.',
    bullets: ['Compare files, folders, storage, and protected items', 'Review storage mix by type and share', 'Spot large categories before they become operational debt'],
  },
  {
    slug: 'workflows',
    icon: 'Workflow',
    title: 'Operational workflows',
    text: 'Move files from intake to review, conversion, approval, and archive with status signals your teams can trust.',
    imageVariant: 'workflow',
    pageTitle: 'Coordinate uploads, scans, conversions, and review',
    pageIntro:
      'The activity center and guide panels keep background jobs and next actions visible while users continue working with files.',
    bullets: ['Track uploads, compression, scans, and conversions', 'Guide users into file explorer, search, and activity center', 'Keep interrupted work visible instead of hidden'],
  },
  {
    slug: 'discovery',
    icon: 'FileSearch',
    title: 'Fast discovery',
    text: 'Search across names, metadata, folders, and file context so teams can find the right document quickly.',
    imageVariant: 'search',
    pageTitle: 'Find documents from the command center',
    pageIntro:
      'Search lives directly beside file exploration so users can jump from a query into the exact item, folder, or workflow they need.',
    bullets: ['Quick Search is a first-class navigation path', 'Results connect back to files, folders, and previews', 'Recent items help users resume without re-searching'],
  },
];

export const featurePages = featureCards;

export const planGroups = {
  personal: [
    {
      name: 'Personal Free',
      price: { monthly: '$0', yearly: '$0' },
      suffix: '/month',
      description: 'For individual file organization and secure sharing.',
      features: ['10 GB storage', 'Secure link sharing', 'File previews', 'Basic storage insights'],
      cta: 'Start personal',
    },
    {
      name: 'Personal Pro',
      price: { monthly: '$9', yearly: '$90' },
      suffix: '/month',
      description: 'For power users who need automation and richer history.',
      features: ['1 TB storage', 'Content intelligence', 'Advanced search', '90-day activity history'],
      cta: 'Choose Pro',
      featured: true,
    },
  ],
  organization: [
    {
      name: 'Team',
      price: { monthly: '$18', yearly: '$180' },
      suffix: '/user/month',
      description: 'For small teams standardizing file intake and collaboration.',
      features: ['Shared workspaces', 'Role-based access', 'Virus scanning', 'Team audit trail'],
      cta: 'Start team',
    },
    {
      name: 'Business',
      price: { monthly: '$32', yearly: '$320' },
      suffix: '/user/month',
      description: 'For departments with governance, retention, and review needs.',
      features: ['Workspace policies', 'Storage insights', 'Approval workflows', 'Priority support'],
      cta: 'Choose Business',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      suffix: '',
      description: 'For regulated organizations and air-gapped deployments.',
      features: ['On-prem or air-gapped', 'SSO and custom controls', 'Dedicated deployment review', 'SLA options'],
      cta: 'Talk to us',
    },
  ],
};

export const deployments = [
  {
    icon: 'Cloud',
    title: 'Managed cloud',
    badge: 'Fastest launch',
    text: 'Hosted application, managed upgrades, elastic storage, and team onboarding with minimal infrastructure work.',
  },
  {
    icon: 'ServerCog',
    title: 'Private cloud',
    badge: 'Your account',
    text: 'Run in your cloud tenancy with private networking, storage controls, and managed release coordination.',
  },
  {
    icon: 'LockKeyhole',
    title: 'On-prem air-gapped',
    badge: 'Maximum control',
    text: 'Deploy behind the firewall with local object storage, offline scanning, controlled updates, and audit exports.',
  },
];

export const docSections = [
  {
    icon: 'Rocket',
    title: 'Getting started',
    text: 'Workspace setup, user invitations, folder models, upload rules, and first-share checklist.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Security and governance',
    text: 'Access controls, audit events, scan policies, retention design, and incident review guidance.',
  },
  {
    icon: 'ServerCog',
    title: 'Deployment guides',
    text: 'Cloud, private cloud, Docker Compose, object storage, Redis, MongoDB, and air-gapped operating notes.',
  },
  {
    icon: 'Code2',
    title: 'Platform APIs',
    text: 'Authentication, files, folders, sharing, search, storage insights, and webhook integration patterns.',
  },
];

export const workflowSteps = [
  'Capture files from users, teams, and shared links',
  'Classify content, scan risk, and enrich metadata',
  'Collaborate through review queues and workspace policies',
  'Measure storage, archive confidently, and prove activity',
];
