import { renderApp } from './components/Hello';
import { setupCounter } from './components/Counter';
import './assets/styles/main.scss';

// 渲染主应用
const appElement = document.getElementById('app');
if (appElement) {
  renderApp(appElement);
  
  // // 设置计数器
  // const counterButton = document.getElementById('counter');
  // if (counterButton) {
  //   setupCounter(counterButton);
  // }
} else {
  console.error('App element not found');
}