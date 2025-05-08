let findButton = document.querySelector(".find-button");
findButton.addEventListener('click',function(){
    document.getElementById('games-catalog').scrollIntoView({ behavior: 'smooth',block: 'center'})
})

let games = [
    {
        title: "hangman",
        description:"Hangman is a single-player word-guessing game where you try to figure out a hidden word one letter at a time. Each incorrect guess brings a stick-figure closer to being fully drawn. You win by guessing the word before the hangman is complete.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Hangman%2C_English%2C_3.png/800px-Hangman%2C_English%2C_3.png",
    },
    {
        title: "tic-tac-toe",
        description: "Tic-Tac-Toe is a classic two-player game played on a 3x3 grid. Players take turns marking Xs and Os in empty squares. The first player to align three of their marks horizontally, vertically, or diagonally wins. If all squares are filled without a winner, the game ends in a draw.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/800px-Tic_tac_toe.svg.png"
    },
    {
        title: "memory match",
        description: "Memory Match is a single or multiplayer card game that tests your ability to remember. Players take turns flipping over two cards at a time, trying to find matching pairs. The player with the most matches at the end wins.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Memory_game.svg/800px-Memory_game.svg.png"
    },
    {
        title: "snake",
        description: "Snake is a single-player arcade game where you control a growing snake that must eat food to gain points. The snake gets longer with each meal and the challenge is to avoid running into the walls or yourself.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Snake_game.svg/800px-Snake_game.svg.png"
    },
    {
        title: "rock paper scissors",
        description: "Rock Paper Scissors is a quick two-player hand game where each player simultaneously chooses one of three options: rock, paper, or scissors. Rock crushes scissors, scissors cuts paper, and paper covers rock. It's often used to make simple decisions.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rock-paper-scissors.svg/800px-Rock-paper-scissors.svg.png"

    }
]
let counter = 0;
let sequencecounter = 0
let card1 = document.querySelector("#card1")
let card1Title = document.querySelector(".card1-title")
let card1Description = document.querySelector(".card1-description")
let card2 = document.querySelector("#card2")
let card2Title = document.querySelector(".card2-title")
let card2Description = document.querySelector(".card2-description")


let cardsButton = document.querySelector(".cards-button")
console.log(cardsButton)
cardsButton.addEventListener('click',function(){
    console.log("click")
    if(counter > games.length - 1){
        counter = 0  
        if (games.length % 2 != 0){
            if (sequencecounter % 2 == 0){
                /*games[counter].title + " 2"*/
                card2Title.textContent = games[counter].title
                card2Description.textContent = games[counter].description
                showCard2()
            }else {
                /*games[counter].title + " 1"*/
                card1Title.textContent = games[counter].title
                card1Description.textContent = games[counter].description
                showCard1()
            }
            counter++
            sequencecounter++
        }else {
                /*games[counter].title + " 1"*/
                card1Title.textContent = games[counter].title
                card1Description.textContent = games[counter].description
                showCard1()
                counter++
            }
    }else{
        if (sequencecounter % 2 == 0){
            if (counter % 2 == 0){
                /*games[counter].title + " 1"*/
                card1Title.textContent = games[counter].title
                card1Description.textContent = games[counter].description
                showCard1()
                counter++
            }
            else{
                /*games[counter].title + " 2"*/
                card2Title.textContent = games[counter].title
                card2Description.textContent = games[counter].description
                showCard2()
                counter++
            }
        }else {
            if (counter % 2 == 0){
                /*games[counter].title + " 2"*/
                card2Title.textContent = games[counter].title
                card2Description.textContent = games[counter].description
                showCard2()
                counter++
            }
            else{
                /*games[counter].title + " 1"*/
                card1Title.textContent = games[counter].title
                card1Description.textContent = games[counter].description
                showCard1()
                counter++
                }
        }
    } 
})
function showCard1(){
    card2.classList.add("card2-animator-fade-out")
    card1.classList.remove("card2-animator-fade-out")
        setTimeout( function(){
            card1.style.zIndex = "1"
            card2.style.zIndex = "-1"
        }, 600)
}
function showCard2(){
    card1.classList.add("card2-animator-fade-out")
    card2.classList.remove("card2-animator-fade-out")
        setTimeout( function(){
            card2.style.zIndex = "1"
            card1.style.zIndex = "-1"
        }, 600)
}


// if i wanna to make a button 

// if(counter > games.length - 1){
//     counter = 0  
//     if (games.length % 2 != 0){
//         if (sequencecounter % 2 == 0){
//            /*games[counter].title + " 2"*/
//            card2Title.textContent = games[counter].title
//         } else {
//            /*games[counter].title + " 1"*/
//            card1Title.textContent = games[counter].title
//         }
//         counter++
//         sequencecounter++
//     }else {
//         /*games[counter].title + " 1"*/
//         card1Title.textContent = games[counter].title
//         counter++
//     }
// }else{
//     if (sequencecounter % 2 == 0){
//         if (counter % 2 == 0){
//            /*games[counter].title + " 1"*/
//             card1Title.textContent = games[counter].title
//             counter++
//         }
//         else{
//            /*games[counter].title + " 2"*/
//             card2Title.textContent = games[counter].title
//             counter++
//         }
//     }else {
//         if (counter % 2 == 0){
//             /*games[counter].title + " 2"*/
//             card2Title.textContent = games[counter].title
//             counter++
//         }
//          else{
//             /*games[counter].title + " 1"*/
//             card1Title.textContent = games[counter].title
//             counter++
//         }
//     }
// } 

// card2.classList.add("card2-animator-fade-out")
//     card1.classList.remove("card2-animator-fade-out")
//     setTimeout( function(){
//     card1.style.zIndex = "1"
//     card2.style.zIndex = "-1"
//     }, 600)
// card1.classList.add("card2-animator-fade-out")
//     card2.classList.remove("card2-animator-fade-out")
//     setTimeout( function(){
//         card2.style.zIndex = "1"
//         card1.style.zIndex = "-1"
//     }, 600)

card2Title.textContent = games[games.length-1].title
card2Description.textContent = games[games.length-1].description

let hamburgerButton = document.querySelector('.hamburger-button');
let menuMobile = document.querySelector('.mobile-menu');
let hamburgerLineIcon = document.querySelector(".hamburger-icon-lines")
let hamburgerXIcon = document.querySelector(".hamburger-icon-x")

console.log(hamburgerLineIcon)
console.log(hamburgerXIcon)
function showMenu(){
    menuMobile.classList.toggle('menu-show')
    hamburgerLineIcon.classList.toggle('hide')
    hamburgerXIcon.classList.toggle('hide')
};

let categories = document.querySelector('.categories-list')
console.log(categories)
let activeItem = null;

categories.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      if (activeItem) {
        activeItem.style.backgroundColor = ''
        activeItem.style.color = ''
        activeItem.style.borderRadius = ''
        activeItem.firstElementChild.setAttribute('fill', '#00C49D')
        activeItem.firstElementChild.setAttribute('stroke', '#00C49D')
      }
      activeItem = e.target;
      activeItem.style.backgroundColor = '#00C49D';
      activeItem.firstElementChild.setAttribute('fill', '#000272')
      activeItem.firstElementChild.setAttribute('stroke', '#000272')
      activeItem.style.color = '#000272'
      activeItem.style.borderRadius = '0 20px 20px 0'
    }
  });
let registerdAccount = [
    {
        email: 'a@a.pl',
        password : 'password'
    }

]

let loginForm = document.querySelector('.login-form')
let loginPopUp = document.querySelector('.login-popup')
let accountLink = document.querySelector('.account-link')
let accountLinks = document.querySelectorAll('.account-links')
if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'true');
    localStorage.setItem('accountLinks', JSON.stringify(['block','block','none']));
}

function showLoginForm(){
    accountLinks[0].style.display = JSON.parse(localStorage.getItem('accountLinks'))[0]
    accountLinks[1].style.display = JSON.parse(localStorage.getItem('accountLinks'))[1]
    accountLink.style.display = JSON.parse(localStorage.getItem('accountLinks'))[2]
}
showLoginForm()



loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.querySelector('#login-email').value
    let password = document.querySelector('#login-password').value
    registerdAccount.forEach(function(account){
        if (account.email == email && account.password == password){
            loginPopUp.classList.add('popup-show')
            loginPopUp.textContent = "successfully logged in"
            localStorage.setItem('accountLinks', JSON.stringify(['none','none','block']));
            showLoginForm()
            setTimeout(function(){
                loginPopUp.classList.remove('popup-show')
            }, 2000)
        }else {
            loginPopUp.classList.add('popup-show')
            loginPopUp.textContent = "Invalid email or password"
            setTimeout(function(){
                loginPopUp.classList.remove('popup-show')
            }, 2000)
        }
    })
})

let signInForm = document.querySelector('.signin-form')

signInForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.querySelector('#signin-username').value
    let signInEmail = document.querySelector('#signin-email').value
    let password = document.querySelector('#signin-password').value
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{7,}$/; 
    if (!emailRegex.test(signInEmail)) {
        loginPopUp.classList.add('popup-show')
        loginPopUp.textContent = "Invalid email format"
        setTimeout(function(){
            loginPopUp.classList.remove('popup-show')
        }, 2000)
    }
})