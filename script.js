//create schedule//
const hoursArr = document.querySelectorAll(".time-block");



//get the squares color coded//
for (let i=0; i<hoursArr.length; i++){
    const hour = parseInt( hoursArr[i].id.split('-')[1])
    console.log (hour)
    const now =dayjs().hour()
console.log (now)
    if(now === hour){
        hoursArr[i].setAttribute('class', 'row time-block present')  
    }
    if(now > hour){
        hoursArr[i].setAttribute('class', 'row time-block past')   
    }
    if(now < hour){
        hoursArr[i].setAttribute('class', 'row time-block future')   
    }
    const text = localStorage.getItem(hoursArr[i].id)
    if(text){
        console.log(text)
        hoursArr[i].children[1].value=text
    }
    
}    
const clickHandler = (event) => {
    const text = event.target.previousElementSibling.value
    const parentID = event.target.parentNode.id
    console.log (text)
    console.log (parentID)
    localStorage.setItem(parentID, text)

}
const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    

    buttonArr[i].addEventListener('click', clickHandler)
}


// get data from local storage

// loop

// localStorage.getItem()

//textAreaArr[i].value = whatever came back from local

var currentHour = dayjs().hour();
let date = dayjs().format ("DD, MMMM, YYYY");
console.log (date);
//current day is displayed at top when you open//
let currentDay = document.querySelector ('#currentDay');

const paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

//present time blocks for 9-5//

//color code time blocks for past, present and future//

//when you click timeblock you can enter event//

//when i click save text is saved into local storage//
//localStorage.setItem()//
//when i hit refresh saved event persists//
//localStorage.getItem()//


