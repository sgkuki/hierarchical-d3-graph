export function renderApp(container: HTMLElement) {
  container.innerHTML = `
    <div class="app-container">
      <h1>TypeScript + Webpack 项目</h1>
      <p class="subtitle">一个纯前端的现代化开发环境</p>
      <div class="features">
        <div class="feature-card">
          <h2>🚀 TypeScript 支持</h2>
          <p>使用强类型语言开发，提高代码质量</p>
        </div>
        <div class="feature-card">
          <h2>📦 Webpack 打包</h2>
          <p>强大的模块打包工具，优化生产环境代码</p>
        </div>
        <div class="feature-card">
          <h2>💅 Sass 预处理</h2>
          <p>使用Sass编写更强大的CSS</p>
        </div>
      </div>
      <button id="counter" class="counter-button">点击计数: 0</button>
      <div class="instructions">
        <h3>项目说明：</h3>
        <ul>
          <li>使用 <code>npm start</code> 启动开发服务器</li>
          <li>使用 <code>npm run build</code> 构建生产版本</li>
          <li>所有组件位于 <code>src/components</code></li>
          <li>样式文件位于 <code>src/assets/styles</code></li>
        </ul>
      </div>
    </div>
  `;
}