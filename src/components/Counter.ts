export function setupCounter(element: HTMLElement) {
  let counter = 0;
  
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `点击计数: ${counter}`;
  };
  
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}