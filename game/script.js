let Pessi;
let Marciniak;
let score = 0;
let gameOver = false;

let basisScore = document.getElementById('score')


window.onload = function() {
    game();
};

function game () {
    for (let i =0; i<9; i++){
        let box = document.createElement('div');
        box.id = i.toString();
        box.addEventListener("click", touchPessi);
        document.getElementById("board").appendChild(box)
    }

    setInterval(randomPessi, 1000)
    setInterval(randomMarciniak, 2000)
}

function getRandomDiv(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function randomPessi () {
    if (gameOver){
        return;
    }

    if (Pessi){
        Pessi.innerHTML = "";
    }

    let miniPessi = document.createElement('img');
    miniPessi.src = "./img/pessi-removebg-preview.png";

    let num = getRandomDiv()
    if (Marciniak && Marciniak.id == num){
        return;
    }
    Pessi = document.getElementById(num)
    Pessi.appendChild(miniPessi)
}

function randomMarciniak (){
    if (gameOver){
        return;
    }

    if (Marciniak){
        Marciniak.innerHTML = "";
    }

    let miniMarciniak = document.createElement('img')
    miniMarciniak.src = "./img/arbitre-removebg-preview.png";

    let num = getRandomDiv();
    if (Pessi && Pessi.id == num){
        return;
    }
    Marciniak = document.getElementById(num)
    Marciniak.appendChild(miniMarciniak)
}

function touchPessi(){
    if (gameOver){
        return;
    }

    if (this == Pessi){
        score += 5;
        document.getElementById("score").innerText = "Score : " + score.toString();
    } else if ( this == Marciniak){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

let PessiSong = document.createElement("audio");
document.getElementById('score').appendChild(PessiSong)
PessiSong.src = "./img/Leo Pessi - Oh Penalties I Official Music.mp3";

let buttonPlay = document.createElement("button");
buttonPlay.innerText = "Play";
document.getElementById('score').appendChild(buttonPlay)

let buttonPause = document.createElement("button");
buttonPause.innerText = "Pause";
document.getElementById('score').appendChild(buttonPause)

buttonPlay.addEventListener('click', function() {
    PessiSong.play();
});

buttonPause.addEventListener('click', function() {
    PessiSong.pause();
});

let cursor = document.createElement('div')
cursor.classList = 'cursor'
document.body.appendChild(cursor)

window.addEventListener('mousemove', e =>{
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})