var userInfo = {name: "",img : "",userName: ""};
var changeRand = function(){
    fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>
    {
        userInfo.name = data.results[0].name.first;
        userInfo.img = data.results[0].picture.large;
        userInfo.userName = data.results[0].login.username;
        document.getElementById("myImage").src = userInfo.img;
        document.getElementById("myName").innerHTML = userInfo.name;
        document.getElementById("myUserName").src = userInfo.userName;
    }
    );   
}