


var photo = 1; 

var next = function(){

    if(photo == 1){
    
        photo = 2;
        //change source pic
    } else if(photo == 2) {
    
        photo = 3;
        //change source pic
    } else if(photo == 3){
    
        photo = 4;
        //change source pic
    } else if(photo == 4){
    
        photo = 5;
        //change source pic
    } else{
    
        photo = 1;
        //change source pic
    }
}
var previous = function(){

    if(photo == 1){
    
        photo = 5;
        //change source pic
    } else if(photo == 2) {
    
        photo = 1;
        //change source pic
    } else if(photo == 3){
    
        photo = 2;
        //change source pic
    } else if(photo == 4){
    
        photo = 3;
        //change source pic
    } else{
    
        photo = 4;
        //change source pic
    }
}