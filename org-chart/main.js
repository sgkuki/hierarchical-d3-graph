// 通过CDN导入D3 ES模块版本
import { drawChart } from './method.js';

// 将方法暴露给全局作用域
window.drawChart = drawChart;

// 初始化D3
console.log("D3版本:", '7.9.0');