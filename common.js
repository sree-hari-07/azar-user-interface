  const radios = document.querySelectorAll('input[type="radio"][name="radio"]');
  const divs = {
    0: document.getElementById('groundDiv'),
    1: document.getElementById('firstDiv'),
    2: document.getElementById('secondDiv')
  };

  radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      Object.values(divs).forEach(div => div.style.display = 'none');
      divs[index].style.display = 'block';
    });
  }); 






document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById("button-back");
  if (backButton) {
    backButton.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
});



document.querySelectorAll('.icon-rooms').forEach(icon => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('selected');
      });
    });

document.addEventListener('DOMContentLoaded', function () {
  const valueRadios = document.querySelectorAll('input[type="radio"][name="value-radio"]');
  const valueDivsMap = {
    'value-g': 'gDiv',
    'value-1': 'oneDiv',
    'value-2': 'twoDiv',
    'value-3': 'threeDiv',
    'value-4': 'fourDiv',
    'value-5': 'fiveDiv'
  };

  function showCorrespondingDiv(value) {
    // Hide all
    Object.values(valueDivsMap).forEach(divId => {
      const div = document.getElementById(divId);
      if (div) div.style.display = 'none';
    });

    // Show selected
    const showDivId = valueDivsMap[value];
    const divToShow = document.getElementById(showDivId);
    if (divToShow) divToShow.style.display = 'block';
  }

  // Bind change listeners
  valueRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        showCorrespondingDiv(radio.value);
      }
    });
  });

  // Show initially selected
  const checkedValueRadio = document.querySelector('input[type="radio"][name="value-radio"]:checked');
  if (checkedValueRadio) {
    showCorrespondingDiv(checkedValueRadio.value);
  }
});  

     
function positionNum() {
    for (let i = 0; i < 60; i++) {
        const secNum = document.querySelector(`#sec-${i}`);
        const minNum = document.querySelector(`#min-${i}`);

        if (0 < i && i < 13) {
            const hourNum = document.querySelector(`#hour-${i}`);
            const hourPosition = 270 + (i * 30);
            hourNum.style.transform = `translate(0, -50%) rotateZ(${hourPosition}deg)`;
        }

        const secMinPosition = 270 + (i * 6);

        secNum.style.transform = `translate(0, -50%) rotateZ(${secMinPosition}deg)`;
        minNum.style.transform = `translate(0, -50%) rotateZ(${secMinPosition}deg)`;
    }
}

// clock-sec, clock-min, clock-hour div
const sec = document.querySelector('.clock-sec');
const min = document.querySelector('.clock-min');
const hour = document.querySelector('.clock-hour');

// Get the initial time when page is open and position the mins secs and hours circles. This prevents the weird animation that occurs when the time seconds or minutes reaches 0 Although the clocks time tends to become inaccurate overtime


// clock-sec, clock-min, clock-hour div

// const sec = document.querySelector('.clock-sec');
// const min = document.querySelector('.clock-min');
// const hour = document.querySelector('.clock-hour');

// // Get the initial date when page is open and position the mins secs and hours circle
// let today = new Date();
// let hours = today.getHours()
// let minutes = today.getMinutes()
// let seconds = today.getSeconds();
// const initialRotation = 90;

// sec.style.transform = `rotateZ(${initialRotation - seconds * 6}deg)`;
// min.style.transform = `rotateZ(${initialRotation - minutes * 6}deg)`;
// hour.style.transform = `rotateZ(${initialRotation - hours * 30}deg)`;


// // Move the elements according to the number passed
// function moveClock() {
//     sec.style.transform = `rotateZ(${initialRotation - seconds * 6}deg)`;
//     min.style.transform = `rotateZ(${initialRotation - minutes * 6}deg)`;
//     hour.style.transform = `rotateZ(${initialRotation - hours * 30}deg)`;

//     setTimeout(() => {
//         seconds += 1
//         if (seconds % 60 == 0) {
//             minutes += 1

//             if (minutes % 60 == 0) {
//                 hours += 1
//             }
//         }

//         moveClock()

//     }, 1000)
// }

// moveClock();
//positionNum();


// Move the elements according to the number passed(Time)

// MoveClock2 For more Consistency


function moveClock2() {
    const sec = document.querySelector('.clock-sec');
    const min = document.querySelector('.clock-min');
    const hour = document.querySelector('.clock-hour');

    let today = new Date();
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds();
    const initialRotation = 90;

    sec.style.transform = `rotateZ(${initialRotation - (seconds * 6)}deg)`;
    min.style.transform = `rotateZ(${initialRotation - (minutes * 6)}deg)`;
    hour.style.transform = `rotateZ(${initialRotation - (hours * 30)}deg)`;

    setTimeout(moveClock2, 1000)
}

moveClock2()
positionNum();

console.log('Common Js End')