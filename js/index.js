let firstScreen = document.querySelector('.first-screen');

let game = document.querySelector('.game')

let meScore = document.querySelector('#meScore')

let meHand = document.querySelector('.meHand')

let aiScore = document.querySelector('#aiScore');

let aiHand = document.querySelector('.aiHand')

let meWin = document.querySelector('.meWin')

let meLose = document.querySelector('.meLose')

let winResult = document.querySelector('#winResult')

let loseResult = document.querySelector('#loseResult')

let startBtn = document.querySelector('.start')

let cancelBtn = document.querySelector('.cancel')

let rockBtn = document.querySelector('.rockBtn')

let paperBtn = document.querySelector('.paperBtn')

let scissorsBtn = document.querySelector('.scissorsBtn')

let gameBtn = document.querySelector('.game-button')

//-----------------

let myScore = 0 ;

let aiiScore = 0 ;

let winScore = 0 ;

let loseScore = 0 ;

//-------------------

cancelBtn.addEventListener('click', function () {
    window.close()
})
// эта функция закрывает вкладку сайта при нажатии
//---------------------

startBtn.addEventListener('click', function () {
    firstScreen.style.display = 'none'
    game.style.display = 'inline-block'
})
// эта функция при нажатии закрывает окно и отрывает дургое 
//------------------


function randomHandAi() {

    let hands = ['p', 'r', 's']; 
    
    let randomHandAi = Math.floor(Math.random() * 3)

    let test = hands[randomHandAi]
    
    return(test)
}
// эта функиця создает рандом 
//-------------

rockBtn.addEventListener('click', function () {

    meHand.setAttribute('src', './image/r.png')

    aiHand.setAttribute('src', `./image/${randomHandAi()}.png`)

    result('r', randomHandAi())
})


paperBtn.addEventListener('click', function () {
    meHand.setAttribute('src', './image/p.png')
    
    aiHand.setAttribute('src', `./image/${randomHandAi()}.png`)

    result('p', randomHandAi())
})

scissorsBtn.addEventListener('click', function () {
    meHand.setAttribute('src', './image/s.png')

    aiHand.setAttribute('src', `./image/${randomHandAi()}.png`)

    result('s', randomHandAi())

})
// эта функиця при нажатии на кнопку выставляет фотографию игроку и рандомную для компьютера 
//---------------


function result(me, ai) {
    if (
        (me === 'r' && ai === 's') ||
        (me === 'p' && ai === 'r') ||
        (me === 's' && ai === 'p')
    ) {   
        myScore++;
        if (myScore === 3) {
            meWin.style.display = 'block';
            console.log("win", winScore);
            winResult.innerText = winScore += 1;
            gameBtn.style.display = 'none';
            setTimeout(() => {
                meWin.style.display = 'none'
                meScore.innerHTML = 0;
                aiScore.innerHTML = 0;
                myScore = 0;
                aiiScore = 0;
                meHand.setAttribute('src', './image/r.png')
                aiHand.setAttribute('src', './image/r.png')
                gameBtn.style.display = 'block'
            }, 1000)
        }
    } else if ((ai === 'r' && me === 's') ||
               (ai === 'p' && me === 'r') ||
               (ai === 's' && me === 'p')){
        aiiScore++;
        if (aiiScore === 3) {
            meLose.style.display = 'block';
            console.log("lose", loseScore);

            loseResult.innerText = loseScore += 1;
            gameBtn.style.display = 'none';
            setTimeout(() => {
                meLose.style.display = 'none'
                meScore.innerHTML = 0;
                aiScore.innerHTML = 0;
                myScore = 0;
                aiiScore = 0;
                meHand.setAttribute('src', './image/r.png')
                aiHand.setAttribute('src', './image/r.png')
                gameBtn.style.display = 'block'
            }, 1000)
        }
    }else{

    }

    meScore.innerText = myScore;
    aiScore.textContent = aiiScore;
}

