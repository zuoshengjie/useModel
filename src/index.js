import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dispatcher, initModel, ModelContext, HookModel } from './useModel';
import useCenter from 'D:/左胜杰测试文件/useModel/my-app1/src/models/useCenter.js'; 
import useTest from 'D:/左胜杰测试文件/useModel/my-app1/src/models/useTest.js'; 
import useUserInfo from 'D:/左胜杰测试文件/useModel/my-app1/src/models/useUserInfo.js'; 


const dispatcher = new Dispatcher();

const init = initModel(dispatcher);

init('useCenter', useCenter); 
init('useTest', useTest); 
init('useUserInfo', useUserInfo); 


ReactDOM.render(
  <React.StrictMode>
      <ModelContext.Provider value={dispatcher}>
    {Object.entries(dispatcher.models).map(([namespace, hook]) => {
     return (
      <HookModel
       key={namespace}
       update={(v) => {
        dispatcher.data[namespace] = v;
        dispatcher.update(namespace);
       }}
       hook={hook}
       namespace={namespace}
      />
     );
    })}
       <App />
    </ModelContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
