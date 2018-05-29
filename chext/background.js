f=function(){
	console.log('Hi');
   console.log(window.getSelection().toString());
}
document.body.addEventListener('dblclick',f);