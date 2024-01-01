//create schedule//
const hoursArr = document.querySelectorAll(".time-block");

const now =dayjs().format ("H")

//get the squares color coded//
for (let i=0; i<hoursArr.length; i++){
    const hour = hoursArr[i].id.substring(5)

    if(now === hour){
        hoursArr[i].setAttribute('class, row time-block present')
    }
}    





// save data to local storage - done

const buttonArr = document.querySelectorAll('button')
const textAreaArr = document.querySelectorAll('.description')

for (let i = 0; i < buttonArr.length; i++){
    const clickHandler = () => {
        const text = textAreaArr[i].value;
        localStorage.setItem(i, text)

    }

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

let paragraph = document.createElement("p");
paragraph.innerText = date;
currentDay.appendChild(paragraph);

//present time blocks for 9-5//

//color code time blocks for past, present and future//

//when you click timeblock you can enter event//

//when i click save text is saved into local storage//
//localStorage.setItem()//
//when i hit refresh saved event persists//
//localStorage.getItem()//


