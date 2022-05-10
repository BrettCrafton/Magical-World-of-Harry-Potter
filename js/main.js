
// ***Grab HTML Elements***
// Buttons:
leftBtn = document.querySelector('#leftBtn')
rightBtn = document.querySelector('#rightBtn')

slytherinDom = document.querySelector('#slytherin')
ravenclawDom = document.querySelector('#ravenclaw')
gryffindorDom = document.querySelector('#gryffindor')
hufflepuffDom = document.querySelector('#hufflepuff')

staffDom = document.querySelector('#staff')
allDom = document.querySelector('#all')

// Output Fields:
nameChar = document.querySelector('#name')
alternateNames = document.querySelector('#alternate_names')
actor = document.querySelector('#actor')
picture = document.querySelector('#picture')

species = document.querySelector('#species')
gender = document.querySelector('#gender')
eyeColour = document.querySelector('#eyeColour')
hairColour = document.querySelector('#hairColour')

alive = document.querySelector('#alive')
dateOfBirth = document.querySelector('#dateOfBirth')
yearOfBirth = document.querySelector('#yearOfBirth')


wand = document.querySelector('#wandDescription')
patronus = document.querySelector('#patronus')


html = document.querySelector('html')


// ***Event Listeners***

leftBtn.addEventListener('click', function() {browseLeft()})
rightBtn.addEventListener('click', function() {browseRight()})

slytherinDom.addEventListener('click', function() {houseSlytherin()})
ravenclawDom.addEventListener('click', function() {houseRavenclaw()})
gryffindorDom.addEventListener('click', function() {houseGryffindor()})
hufflepuffDom.addEventListener('click', function() {houseHufflepuff()})

staffDom.addEventListener('click', function() {otherStaff()})
allDom.addEventListener('click', function() {otherAll()})

// ***Initialization***
// Declare global data storage object
let slytherin, ravenclaw, gryffindor, hufflepuff, staff, all
let houseHolder = all

// Declare index binding
let browseIndex = 0
const music = new Audio('css/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3')

// data from API
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters/house/slytherin`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        slytherin = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters/house/ravenclaw`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        ravenclaw = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters/house/gryffindor`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        gryffindor = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters/house/hufflepuff`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        hufflepuff = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters/staff`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        staff = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
fetch(`https://api.codetabs.com/v1/proxy?quest=https://hp-api.herokuapp.com/api/characters`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        all = data

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
  
function removeHidden(){
    document.querySelector('.titleBox').classList.remove('hidden')
    document.querySelector('.detailsTable').classList.remove('hidden')
    document.querySelector('#rightBtn').classList.remove('hidden')
    document.querySelector('#leftBtn').classList.remove('hidden')
}

function browseLeft() {
    music.play()
    removeHidden()
    //If first click, or at end of array, set movie to be displayed to 0
    if(browseIndex === undefined || browseIndex <= 0) browseIndex = houseHolder.length -1
    else browseIndex -= 1
    updateDisplay(houseHolder)   
}

function browseRight() {
    music.play()
    removeHidden()


    //If first click, or at end of array, set movie to be displayed to 0
    if(browseIndex === undefined || browseIndex >= houseHolder.length - 1) browseIndex = 0 
    else browseIndex += 1
    updateDisplay(houseHolder)
}

// House functions
function houseSlytherin(){
    removeHidden()
    browseIndex = 0
    houseHolder = slytherin
    updateDisplay(slytherin)
    
}

function houseRavenclaw(){
    removeHidden()
    browseIndex = 0
    houseHolder = ravenclaw
    updateDisplay(ravenclaw)  
    
}

function houseGryffindor(){
    removeHidden()
    browseIndex = 0
    houseHolder = gryffindor
    updateDisplay(gryffindor)
    
}

function houseHufflepuff(){
    removeHidden()
    browseIndex = 0
    houseHolder = hufflepuff
    updateDisplay(hufflepuff)
    
}

// Other functions
function otherStaff(){
    removeHidden()  
    browseIndex = 0  
    houseHolder = staff
    updateDisplay(staff)
    
}

function otherAll(){
    removeHidden()
    browseIndex = 0
    houseHolder = all
    updateDisplay(all) 
    
}

function checkEmpty(value, dom){
  return value == "" ? dom = "Unknown" : dom = value
}
  
//update display function
function updateDisplay(house) {
    nameChar.innerText = house[browseIndex].name
    let charName = house[browseIndex].name
    house[browseIndex].alternate_names.length == 0 ? 
    alternateNames.innerText = "No Other Names" :
    alternateNames.innerText = house[browseIndex].alternate_names.join(", ")
    
    house[browseIndex].alternate_actors.length == 0 ? 
    actor.innerText = "Played by: " + house[browseIndex].actor : 
    actor.innerText = "Played by: " + house[browseIndex].actor + ", " + house[browseIndex].alternate_actors.join(", ")
  
    //image
    if(house[browseIndex].image == ""){
        picture.src = "img/default picture.webp"
    }
    else{
        picture.src = house[browseIndex].image
    }
    // species
    if(house[browseIndex].species == ""){
        species.innerText = "Unknown"
    }
    else{
        species.innerText = house[browseIndex].species
    }
    // gender
    if(house[browseIndex].gender == ""){
        gender.innerText = "Unknown"
    }
    else{
        gender.innerText = house[browseIndex].gender
    }
    // eye colour
    if(house[browseIndex].eyeColour == ""){
        eyeColour.innerText = "Unknown"
    }
    else{
        eyeColour.innerText = house[browseIndex].eyeColour
    }
    // hair colour
    if(house[browseIndex].hairColour == ""){
        hairColour.innerText = "Unknown"
    }
    else{
        hairColour.innerText = house[browseIndex].hairColour
    }
    // still alive?
    if(house[browseIndex].alive == true) 
        {alive.innerText = "Alive"}
    else {alive.innerText = "Dead"}
    // date of birth
    if(house[browseIndex].dateOfBirth == ""){
        dateOfBirth.innerText = "Unknown"
    }
    else{
        dateOfBirth.innerText = house[browseIndex].dateOfBirth
    }
    // birth year
    if(house[browseIndex].yearOfBirth == ""){
       yearOfBirth.innerText = "Unknown"
    }
    else{
        yearOfBirth.innerText = house[browseIndex].yearOfBirth
    }
    // wand setup
    let wandWood, wandCore, wandLength
    if(house[browseIndex].wand.wood == ""){
        wandWood = "unknown"
     }
     else{
        wandWood = house[browseIndex].wand.wood
     }
     if(house[browseIndex].wand.core == ""){
        wandCore = "unknown"
     }
     else{
        wandCore = house[browseIndex].wand.core
     }
     if(house[browseIndex].wand.length == ""){
        wandLength = "unknown"
     }
     else{
        wandLength = house[browseIndex].wand.length
     }


    // wand description
    wand.innerText = `${charName}'s wand is made of ${wandWood} wood. It has a core of ${wandCore} and is ${wandLength} inches long.` 
    
    if(house[browseIndex].patronus == ""){
        patronus.innerText = "Patronus Form: Unknown"
     }
     else{
        patronus.innerText = "Patronus Form: " + house[browseIndex].patronus
     }
}

// function startUp(){
//     fetch(`http://hp-api.herokuapp.com/api/characters`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         all = data

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
    
//     houseHolder = all
//     browseIndex = -1
//     updateDisplay(all)
// }
// startUp()