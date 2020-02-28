function hello () {
  const element = document.createElement('div');
        
  element.innerHTML = "Hello World!";
  element.classList.add("hello");
  element.style.color = "green";
  element.style.fontSize = "52px";
  element.style.fontWeight = 'lighter';
  element.style.textAlign = 'center';
  return element;
}

document.body.appendChild(hello());