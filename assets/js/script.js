let green = document.querySelector('.green');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let text = document.getElementById('text');

green.onclick = function(){
  text.style.color = '#008000';
}
red.onclick = function(){
  text.style.color = '#ff0000';
}
blue.onclick = function(){
  text.style.color = '#0000ff';
}
