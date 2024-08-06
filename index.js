let randomNumber1 = Math.floor(Math.random()*6+1);
console.log(randomNumber1);


let image1 = "images/dice" +randomNumber1 +".png";
document.querySelector(".dice .img1").setAttribute("src", image1);

let randomNumber2 = Math.floor(Math.random()*6+1);
console.log(randomNumber2);

let image2 = "images/dice"+randomNumber2+".png";
document.querySelector(".dice .img2").setAttribute("src", image2);

let h1 = document.querySelector('h1');

if (randomNumber1 === randomNumber2) {
    h1.innerHTML= ('draw!')
}
else if (randomNumber1 < randomNumber2) {
    h1.innerHTML= ('Player 2 Wins!🚩')
}
else {
    h1.innerHTML= ('🚩Player 1 Wins!')
}

