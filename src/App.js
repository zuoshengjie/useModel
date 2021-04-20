import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

function App() {
  const [headerVisible, setHeaderVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);
  return (
    <>
      <div className="App">
        {headerVisible && <Header />}
        {contentVisible && <Content />}
      </div>

      <div>
        <button onClick={() => setHeaderVisible((v) => !v)}>
          {headerVisible ? '关闭' : '开启'}header
        </button>
        <button onClick={() => setContentVisible((v) => !v)}>
          {contentVisible ? '关闭' : '开启'}content
        </button>
      </div>
    </>
  );
}

export default App;
