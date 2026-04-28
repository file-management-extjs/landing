import Icon from './Icon.jsx';

const recentItems = [
  ['Wajdi Jurry.pdf', 'PDF', '388.7 KB', 'Apr 25, 2026'],
  ['AI', 'Folder', '388.7 KB', 'Apr 25, 2026'],
  ['rufus-4.13.exe', 'octet-stream', '1.9 MB', 'Apr 25, 2026'],
  ['Docker Desktop Installer.exe', 'octet-stream', '564.5 MB', 'Apr 25, 2026'],
  ['PhpStorm-2024.3.5.exe', 'octet-stream', '756.2 MB', 'Apr 25, 2026'],
  ['pycharm-professional-2024.3.5.exe', 'octet-stream', '836.7 MB', 'Apr 25, 2026'],
  ['Homzen v1.2.7 Nulled.rar', 'vnd.rar', '99.3 MB', 'Apr 24, 2026'],
];

const storageMix = [
  ['Other', '4', '2.1 GB', '82%'],
  ['Archives', '2', '317.9 MB', '12%'],
  ['Videos', '3', '134.5 MB', '5%'],
  ['Audio', '2', '5.6 MB', '0%'],
  ['Documents', '1', '388.7 KB', '0%'],
  ['Images', '5', '358.3 KB', '0%'],
];

const variantConfig = {
  workspace: {
    title: 'File Explorer workspace',
    activeNav: 'File Explorer',
    callout: 'Browse, upload, search, and manage files from one command center.',
    highlights: ['Files', 'Folders', 'Recent Activity'],
  },
  intelligence: {
    title: 'Content intelligence review',
    activeNav: 'Activity Center',
    callout: 'Classification, scan status, and review signals stay attached to workspace files.',
    highlights: ['Protected', 'Workspace Health', 'Recent Activity'],
  },
  security: {
    title: 'Protected sharing',
    activeNav: 'Shared With Me',
    callout: 'Access policy, password protection, and audit trails travel with every shared item.',
    highlights: ['Protected', 'Workspace Guide', 'Recent Activity'],
  },
  storage: {
    title: 'Storage Insights',
    activeNav: 'Storage Insights',
    callout: 'See storage totals, file mix, and cleanup pressure from the same operating view.',
    highlights: ['Storage', 'Storage Mix', 'Workspace Health'],
  },
  workflow: {
    title: 'Activity Center',
    activeNav: 'Activity Center',
    callout: 'Keep background uploads, downloads, compression, scans, and conversions visible.',
    highlights: ['Workspace Guide', 'Recent Activity', 'Workspace Health'],
  },
  search: {
    title: 'Quick Search',
    activeNav: 'Quick Search',
    callout: 'Jump from a query into files, folders, previews, and recent workspace activity.',
    highlights: ['Files', 'Recent Activity', 'Workspace Guide'],
  },
};

const navItems = [
  ['Home', 'FolderOpen'],
  ['File Explorer', 'FolderOpen'],
  ['Shared With Me', 'Share2'],
  ['Shared By Me', 'Share2'],
  ['Upload Files', 'Upload'],
  ['Quick Search', 'FileSearch'],
  ['New Folder', 'FolderKanban'],
  ['Opened Panels', 'Archive'],
];

function isHighlighted(config, name) {
  return config.highlights.includes(name);
}

export default function AppScreenshot({ variant = 'workspace', compact = false }) {
  const config = variantConfig[variant] || variantConfig.workspace;

  return (
    <figure className={`app-screenshot ${compact ? 'compact' : ''}`} aria-label={`${config.title} app screenshot`}>
      <div className="app-chrome">
        <aside className="app-nav-panel">
          <div className="app-nav-title">
            <strong>Navigation Panel</strong>
            <span>«</span>
          </div>
          <nav>
            {navItems.map(([label, icon]) => (
              <span className={label === config.activeNav ? 'active' : ''} key={label}>
                <Icon name={icon} size={16} />
                {label}
              </span>
            ))}
          </nav>
          <div className="app-workspace">
            <strong>Workspace</strong>
            <span>Personal</span>
          </div>
          <div className="app-activity-mini">
            <strong>
              <Icon name="Activity" size={15} />
              Activity Center
            </strong>
            <p>No active background jobs</p>
          </div>
          <div className="app-bottom-links">
            <span className={config.activeNav === 'Storage Insights' ? 'active' : ''}>Storage Insights</span>
            <span>Organizations</span>
            <span>Settings</span>
          </div>
        </aside>

        <section className="app-main-panel">
          <div className="app-toolbar">
            <span>
              <Icon name="FolderOpen" size={16} />
              Open File Explorer
            </span>
            <span>
              <Icon name="Upload" size={16} />
              Upload Files
            </span>
            <span>
              <Icon name="FolderKanban" size={16} />
              Create Folder
            </span>
            <span>
              <Icon name="FileSearch" size={16} />
              Quick Search
            </span>
            <span>
              <Icon name="RefreshCw" size={16} />
              Refresh
            </span>
          </div>

          <div className="app-panel-title">{config.title}</div>

          <div className="app-welcome">
            <div>
              <h3>Welcome back, wjurry</h3>
              <p>Open your explorer, upload files, search everything, and keep an eye on activity from one place.</p>
            </div>
            <div className="app-last-refresh">
              <span>Last refresh: Apr 27, 2026 9:07 AM</span>
              <strong>8 recent items loaded</strong>
            </div>
          </div>

          <div className="app-stat-grid">
            <StatCard name="Files" icon="FileText" value="17" note="10 visible at root" active={isHighlighted(config, 'Files')} />
            <StatCard name="Folders" icon="FolderOpen" value="12" note="Directories across your workspace" active={isHighlighted(config, 'Folders')} />
            <StatCard name="Storage" icon="Database" value="2.6 GB" note="Total clean file size" active={isHighlighted(config, 'Storage')} />
            <StatCard name="Protected" icon="LockKeyhole" value="0" note="Password protected items" active={isHighlighted(config, 'Protected')} />
          </div>

          <div className="app-content-grid">
            <StorageMix active={isHighlighted(config, 'Storage Mix')} />
            <WorkspaceHealth active={isHighlighted(config, 'Workspace Health')} />
            <RecentActivity active={isHighlighted(config, 'Recent Activity')} />
            <WorkspaceGuide active={isHighlighted(config, 'Workspace Guide')} />
          </div>
        </section>
      </div>

      <figcaption>{config.callout}</figcaption>
    </figure>
  );
}

function StatCard({ name, icon, value, note, active }) {
  return (
    <article className={`app-stat-card ${active ? 'active' : ''}`}>
      <h4>
        <Icon name={icon} size={17} />
        {name}
      </h4>
      <div>
        <strong>{value}</strong>
        <span>{note}</span>
      </div>
      <div className="app-progress">
        <span style={{ width: name === 'Storage' ? '82%' : name === 'Protected' ? '0%' : name === 'Folders' ? '41%' : '59%' }} />
      </div>
    </article>
  );
}

function StorageMix({ active }) {
  return (
    <article className={`app-window app-storage-mix ${active ? 'active' : ''}`}>
      <h4>
        <Icon name="PieChart" size={17} />
        Storage Mix
      </h4>
      <div className="app-storage-body">
        <div className="app-pie" />
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Files</th>
              <th>Size</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            {storageMix.map(([type, files, size, share]) => (
              <tr key={type}>
                <td>{type}</td>
                <td>{files}</td>
                <td>{size}</td>
                <td>
                  <span className="app-share-bar">
                    <span style={{ width: share }} />
                    {share}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function WorkspaceHealth({ active }) {
  return (
    <article className={`app-window app-health ${active ? 'active' : ''}`}>
      <h4>
        <Icon name="Gauge" size={17} />
        Workspace Health
      </h4>
      <p>Snapshot: 29 items, 0 active scans</p>
      <span><b style={{ width: '34%' }} />10 of 29 items visible at root</span>
      <span><b style={{ width: '89%' }} />17 of 19 files ready</span>
      <span><b style={{ width: '82%' }} />Other holds 82% of storage</span>
    </article>
  );
}

function RecentActivity({ active }) {
  return (
    <article className={`app-window app-recent ${active ? 'active' : ''}`}>
      <h4>
        <Icon name="Activity" size={17} />
        Recent Activity
      </h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {recentItems.map(([name, type, size, created]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{type}</td>
              <td>{size}</td>
              <td>{created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

function WorkspaceGuide({ active }) {
  return (
    <article className={`app-window app-guide ${active ? 'active' : ''}`}>
      <h4>
        <Icon name="BookOpen" size={17} />
        Workspace Guide
      </h4>
      <div>
        <Icon name="FolderOpen" size={16} />
        <strong>Open File Explorer</strong>
        <p>Browse folders, view files, move items, and manage passwords.</p>
      </div>
      <div>
        <Icon name="FileSearch" size={16} />
        <strong>Use Quick Search</strong>
        <p>Press Ctrl+Space or use the left navigation to jump straight to files.</p>
      </div>
      <div>
        <Icon name="Activity" size={16} />
        <strong>Activity Center</strong>
        <p>Track uploads, downloads, compression, scans, conversions, and interrupted work.</p>
      </div>
    </article>
  );
}
