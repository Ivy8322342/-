const next=document.querySelector('#next');
const prev=document.querySelector('#prev');
const circles=document.querySelectorAll('.circle');
const progress=document.querySelector('#progress');
const ig=document.querySelector('#ig img');

var current=1;
var num=1;

next.addEventListener('click',function(){
		if(current<circles.length){current++;}
		update();
		console.log('clicked next: '+current);
	
})
prev.addEventListener('click',function(){
	current--;
		if(current<1){current=1;}
		update();
		console.log('clicked prev: '+current);
	
})

function update(){
circles.forEach(function(circle,ind){
		if(ind<current){
			circle.classList.add('active');
		}else{

			circle.classList.remove('active');
		}

});
num=current*3;
ig.src='https://picsum.photos/300/500?random='+num;
progress.style.width=(current-1)/(circles.length-1) * 100 +'%';

if(current===1){
	prev.disabled=true;
}else if(current===circles.length){
	next.disabled=true;
}else{
	prev.disabled=false;
	next.disabled=false;
}

		
}