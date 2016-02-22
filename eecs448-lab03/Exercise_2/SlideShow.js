


var photo = 1; 

var next = function(){

    if(photo == 1){
		document.getElementById("screenshot").src="Screenshot_2015-03-20-15-50-19.png";
        photo = 2;
        //change source pic
    } else if(photo == 2) {
		document.getElementById("screenshot").src= "Screenshot_2015-03-20-15-51-36.png";
        photo = 3;
        //change source pic
    } else if(photo == 3){
		document.getElementById("screenshot").src= "Screenshot_2015-03-20-15-54-44.png";
        photo = 4;
        //change source pic
    } else if(photo == 4){
		document.getElementById("screenshot").src= "Screenshot_2015-09-27-09-11-57.png";
        photo = 5;
        //change source pic
    } else{
		document.getElementById("screenshot").src="Screenshot_2015-03-19-16-35-35.png";
        photo = 1;
        //change source pic
    }
}
var previous = function(){

    if(photo == 1){
		document.getElementById("screenshot").src= "Screenshot_2015-09-27-09-11-57.png";
        photo = 5;
        //change source pic
    } else if(photo == 2) {
		document.getElementById("screenshot").src="Screenshot_2015-03-19-16-35-35.png";
        photo = 1;
        //change source pic
    } else if(photo == 3){
		document.getElementById("screenshot").src= "Screenshot_2015-03-20-15-50-19.png";
        photo = 2;
        //change source pic
    } else if(photo == 4){
		document.getElementById("screenshot").src= "Screenshot_2015-03-20-15-51-36.png";
        photo = 3;
        //change source pic
    } else{
		document.getElementById("screenshot").src= "Screenshot_2015-03-20-15-54-44.png";
        photo = 4;
        //change source pic
    }
}