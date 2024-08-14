var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
function display(image, value){
    paste = "images/dice"+value;
    document.querySelector(image).setAttribute("src",paste+".png");
}
display(".img1",p1);
display(".img2",p2);
if(p1>p2){
    document.querySelector("h1").innerText = "Player1 wins!";
}else if(p1<p2){
    document.querySelector("h1").innerText = "Player2 wins!";
}else{
    document.querySelector("h1").innerText = "Draw!";
}