const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const deadline = document.querySelector(".deadline");
const counterDiv = document.querySelector(".counter-div");
const items = document.querySelectorAll(".counter-div h3");

// console.log(items);

let futureDate = new Date(2022, 1, 13, 20, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();
const day = days[futureDate.getDay()];


deadline.textContent = day + ' ' + date + ' ' + month + ' ' + year + ' ' + hours + ':' + mins + 'am';

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
    const currentTime = new Date().getTime();
    const t = futureTime - currentTime;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let remainingDay = Math.floor(t / oneDay);
    let remainingHours = Math.floor((t % oneDay) / oneHour);
    let remainingMins = Math.floor((t % oneHour) / oneMin);
    let remainingSecs = Math.floor((t % oneMin) / 1000);

    // set values array
    const values = [remainingDay, remainingHours, remainingMins, remainingSecs];

    // set format
    const format = (item) => {
        if(item < 10) {
            return item = '0' + item;
        } 
        else {
            return item;
        }
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if(t < 0) {
        clearInterval(countdown);
        counterDiv.innerHTML = `<a class="start-btn">Get Started</a>`;
        counterDiv.classList.add('counter-expired-div')
        console.log(currentTime -t);
    }
}

// Countdown 
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();