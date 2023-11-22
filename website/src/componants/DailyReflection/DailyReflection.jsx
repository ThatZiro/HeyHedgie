import React, { useState } from 'react';
import './DailyReflection.css'

function DailyReflection() {
    const [text, setText] = useState('');
    
    const handleInputChange = (event) => {
      setText(event.target.value);
    };
    
    const autoExpand = () => {
      const textarea = document.getElementById('autoExpandTextarea');
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
    
  return (
    <>
      <div className="daily-reflection">
        <div className="dr-header">
          <h1>Daily Reflection</h1>
        </div>
        <div className="dr-content">
          <div className="art">
            <div className="cover"></div>
            <div className="page1"></div>
            <div className="page2"></div>
            <div className="page3"></div>
            <dic className="paper"></dic>
            <div className="pagecenter"></div>
          </div>
          <div className="sidebar sidebar-left">
            <button className="bg-blue">acts of SELF-CARE</button>
            <button className="bg-green">acts of KINDNESS</button>
            <button className="bg-purple">LESSONS learned today</button>
            <button className="bg-red">today I am GRATEFUL for</button>
            <button className="bg-pink">daily AFFIRMATION</button>
          </div>
          <div className="dr-journal">
            <div>
              <h2>Glimmers</h2>
              <div className="content">
                <div className="section">
                  <h2> Acts of Self-Care</h2>
                  <textarea
                    id="autoExpandTextarea"
                    value={text}
                    onChange={handleInputChange}
                    onInput={autoExpand}
                    placeholder="Type your text here..."
                    draggable="false"
                  />
                </div>
                <div className="section-empty">
                  <p>+</p>
                </div>
                
              </div>
            </div>
            <div>
              <h2>Triggers</h2>
              <div className="content"></div>
            </div>
          </div>
          <div className="sidebar sidebar-right">
            <button className="bg-blue">caused my Anxiety</button>
            <button className="bg-green">left me DEPRESSED</button>
            <button className="bg-purple">made me SAD</button>
            <button className="bg-red">triggered my PANIC ATTACK</button>
            <button className="bg-pink">brought me ANGER</button>
          </div>
        </div>
        <div className="dr-footer">
          <button>Clear</button>
          <button>Save</button>
          <button>Share</button>
        </div>
      </div>
    </>
  )
}

export default DailyReflection;
