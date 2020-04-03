var numsq=6;
var colors = getRandomColor(numsq);
var squares=document.querySelectorAll(".square");
var pick=colorPick();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var resetb=document.getElementById("reset");
var h1=document.querySelector("h1");
var easyb=document.getElementById("easy"); 
var hardb=document.getElementById("hard");

	easyb.addEventListener("click", function(){
		hardb.classList.remove("selected");
		easyb.classList.add("selected");
		numsq=3;
		colors = getRandomColor(numsq);
		pick=colorPick();
		colorDisplay.textContent=pick;
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
				squares[i].style.backgroundColor=colors[i];	
			} else{
				squares[i].style.display="none";
			}
	}
	});

	hardb.addEventListener("click", function(){
		easyb.classList.remove("selected");
		hardb.classList.add("selected");
		numsq=6;
		colors = getRandomColor(numsq);
		pick=colorPick();
		colorDisplay.textContent=pick;
		for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor=colors[i];	
				squares[i].style.display="block";
	}
	});



	resetb.addEventListener("click", function(){
	colors = getRandomColor(numsq);
	pick=colorPick();
	colorDisplay.textContent=pick;
	messageDisplay.textContent=" ";
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	});

colorDisplay.textContent=pick;
for (var i = 0; i <= squares.length; i++) {
	squares[i].style.backgroundColor=colors[i];
	//add event listener
	squares[i].addEventListener("click",function(){
		//grab a color of clicked square
		var click=this.style.backgroundColor;
		//campare the clicked square with picked color
		if(click === pick)
			{
				messageDisplay.textContent="Correct";
				resetb.textContent="Play Again?";
				changeColor(click)
  				h1.style.backgroundColor=click;
			}
			else
			{
				  this.style.backgroundColor="black ";
				  messageDisplay.textContent="try again";
			}
	});
}

function changeColor(color){

	//loop
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}

}

function colorPick(){

	var random=Math.floor(Math.random() * colors.length);
	return colors[random]
}

function getRandomColor(num){
	var arr = []

	for(var i = 0;i < num; i++)
	 arr.push(randomColor());

	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +  ", " + b +")";
}