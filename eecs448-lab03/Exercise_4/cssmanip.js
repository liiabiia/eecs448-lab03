function changeColBack(){
	var red= document.getElementById("redVal");
	redValue=red.form.redvalborder.value;
	var green= document.getElementById("greenVal");
	greenValue=green.form.greenvalborder.value;
	var blue= document.getElementById("blueVal");
	blueValue=blue.form.bluevalborder.value;
	var changeBorder= document.getElementById("p1");
	
	var red1=document.getElementById("redValBor");
	redValue1= red1.form.redvalborder1.value;
	var green1=document.getElementById("greenValBor");
	greenValue1= green1.form.greenvalborder1.value;
	var blue1=document.getElementById("blueValBor");
	blueValue1= blue1.form.bluevalborder1.value;
	var width1=document.getElementById("widthBor");
	widthValue1= width1.form.widthBor.value;
	
	changeBorder.style.backgroundColor=rgb(redValue,greenValue,blueValue);
	changeBorder.style.borderColor=rgb(redValue1,greenValue1,blueValue1);
	changeBorder.style.borderWidth=widthValue1;
}
//http://stackoverflow.com/questions/2173229/how-do-i-write-a-rgb-color-value-in-javascript
function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}


