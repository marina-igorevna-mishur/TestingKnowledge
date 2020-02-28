import './style.css';

function hello () {
  const element = document.createElement('div');
        
  element.innerHTML = "Hello World!";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(hello());