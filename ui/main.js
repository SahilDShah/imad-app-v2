console.log('Loaded!');

var element=document.getElementByID('main-text');
element.innerHTML='This Is New Content';

var img=document.getElementByID('madi');
img.onclick = function() {
  img.style.marginLeft='100px';   
};