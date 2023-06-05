var data1 = {image:"./Current.jpg",name:"Nimisha",designation:"Student"}
var data2 = {image:"./Childhood.jpg",name:"Nimmi",designation:"SDE"}
var isData1 = true;
var displayData;
var changeMyPic = function(){
    if(isData1){
        displayData = data2;
        isData1 = false;
    }
    else{
        displayData = data1;
        isData2 = true;
    }
    document.getElementById("myImage").src = displayData.image;
}