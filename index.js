import App from './components/App.js'
import PinkBlackAnimation from './components/PinkBlackAnimation.js'
import Box from './components/Box.js'

//Define the custom html elements
window.customElements.define('html-app', App);
window.customElements.define('pink-black-animation', PinkBlackAnimation);
window.customElements.define('box-component', Box);

const docRoot = document.getElementById('documentRoot');
const appRoot = document.createElement('html-app');
docRoot.appendChild(appRoot);


const pinkBlackAnimContainer = document.getElementById("pinkblack-anim-container");
//const firstBox = pinkBlackAnimContainer.querySelector("div:first-child");
const boxes = pinkBlackAnimContainer.querySelectorAll("div:nth-child(-n+4)");

const nameText = document.getElementById("nameText");
const jobTitleText = document.getElementById("jobTitleText");

console.log(pinkBlackAnimContainer);
console.log(boxes[0]);

boxes[0].addEventListener("animationend", pinkBlackAnimListener, false);
jobTitleText.addEventListener("animationend", jobTitleTextAnimListener, false);

let pinkBlackAnimIteration = 0;
function pinkBlackAnimListener(event) {
    switch (event.type) {
        case "animationend":   
            pinkBlackAnimIteration += 1;
            nameText.classList.add("changeOpacity");
            jobTitleText.classList.add("changeOpacityDelayed");

            console.log("pinkBlackAnimIteration: ", pinkBlackAnimIteration);

            if (pinkBlackAnimIteration > 3) {
              boxes[0].removeEventListener("animationend", () => {});
              jobTitleText.removeEventListener("animationend", () => {}); 
              pinkBlackAnimContainer.remove();
            }
            break;
    }
}

function jobTitleTextAnimListener(event) {
  switch (event.type) {
      case "animationend":   
          document.body.style.backgroundColor = "black";

          boxes[0].classList.remove("moveBox");
          boxes[0].classList.add("moveBox-backwards");

          boxes[1].classList.remove("moveBox-reverse");
          boxes[1].classList.add("moveBox-reverse-backwards");

          boxes[2].classList.remove("moveBox");
          boxes[2].classList.add("moveBox-backwards");

          boxes[3].classList.remove("moveBox-reverse");
          boxes[3].classList.add("moveBox-reverse-backwards");
          break;
          //
  }
}
