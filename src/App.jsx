import { useState } from 'react'
import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState("tab1")

  return (
    <div className="container">
      <div className="header">Tabs Component with React</div>
      
      <div className="tabs">
        <button className={activeTab === "tab1" ? "tab active" : "tab"} onClick={() => setActiveTab("tab1")}>
          Tab 1
        </button>
        <button className={activeTab === "tab2" ? "tab active" : "tab"} onClick={() => setActiveTab("tab2")}>
          Tab 2
        </button>
        <button className={activeTab === "tab3" ? "tab active" : "tab"} onClick={() => setActiveTab("tab3")}>
          Tab 3
        </button>
        <button className={activeTab === "tab4" ? "tab active" : "tab"} onClick={() => setActiveTab("tab4")}>
          Tab 4
        </button>
      </div>

      <div className="content">
        {activeTab === "tab1" && <div><h1>Content1</h1><p>Lorem ipsum dolor sit amet...</p></div>}
        {activeTab === "tab2" && <div><h1>Content2</h1><p>Lorem ipsum dolor sit amet...</p></div>}
        {activeTab === "tab3" && <div><h1>Content3</h1><p>Lorem ipsum dolor sit amet...</p></div>}
        {activeTab === "tab4" && <div><h1>Content4</h1><p>Lorem ipsum dolor sit amet...</p></div>}
      </div>
    </div>
  )
}

export default App
