import { useState } from 'react'
import './css/App.css'
import Hannah from './components/Hannah'
import Gallery from './components/Gallery'
import Reasons from './components/Reasons'
import Empty from './components/Empty'

const TABS = [
  { id: 'notebook', label: '📓 Notebook' },
  { id: 'gallery',  label: '🖼️ Gallery'  },
  { id: 'reasons',  label: 'Wait lang' },
  { id: 'tab4',     label: 'Wait lang'       },
  { id: 'tab5',     label: 'Wait lang'       },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('notebook')

  return (
    <div className="app-wrapper">
      {/* ── NAVBAR ── */}
      <nav className="app-nav">
        <div className="app-nav-inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`app-tab ${activeTab === tab.id ? 'app-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── PAGE CONTENT ── */}
      <main className="app-main">
        {activeTab === 'notebook' && <Hannah />}
        {activeTab === 'gallery'  && <Gallery />}
        {activeTab === 'reasons'  && <Empty />}
        {activeTab === 'tab4'     && <Empty />}
        {activeTab === 'tab5'     && <Empty/>}
      </main>
    </div>
  )
}