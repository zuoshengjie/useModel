const writeImport = (models) => {
  return models.reduce(
    (p, { key, path }) => p + `import ${key} from ${path}; \n`,
    '',
  );
};
const writeInit = (models) => {
  return models.reduce(
    (p, { key }) => p + `init('${key}', ${key}); \n`,
    '',
  );
};

const writeMainFile = (models) => {
  return `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Dispatcher, initModel, ModelContext } from 'src/useModel';
${writeImport(models)}

const dispatcher = new Dispatcher();

const init = initModel(dispatcher);

${writeInit(models)}

ReactDOM.render(
  <React.StrictMode>
      <ModelContext.Provider value={dispatcher}>
      	<App />
    </ModelContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
`;
};

module.exports = {
	writeMainFile,
};
