import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 通用样式
import App from './App';
import reportWebVitals from './reportWebVitals'; // 记录页面上的性能

// React.StrictMode 可以检查App及其子组件的代码不合理的地方
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
