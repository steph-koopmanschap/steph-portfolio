export default class PinkBlackAnimation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="pinkblack-anim-container"  >
            <div class="bg-pink-400 translate-x-full flex justify-center items-center moveBox" style="width: 100vw; height: 25vh;">
                <p id="nameText" class="text-black flex text-center text-xl font-bold opacity-0">Steph Koopmanschap</p>
            </div>
            <div class="bg-black -translate-x-full flex justify-center items-center moveBox-reverse" style="width: 100vw; height: 25vh;">
                <p id="jobTitleText" class="text-pink-400 flex text-center text-xl font-bold opacity-0">Full Stack Web Developer</p>
            </div>
            <div class="bg-pink-400 translate-x-full moveBox" style="width: 100vw; height: 25vh;"></div>
            <div class="bg-black -translate-x-full moveBox-reverse" style="width: 100vw; height: 25vh;"></div>
        </div>
        `;




    }
}


//
            // <box-component className="bg-pink-400 translate-x-full moveBox" width="100vw" height="25vh"></box-component>
            // <box-component className="bg-black -translate-x-full moveBox-reverse" width="100vw" height="25vh"></box-component>
            // <box-component className="bg-pink-400 translate-x-full moveBox" width="100vw" height="25vh"></box-component>
            // <box-component className="bg-black -translate-x-full moveBox-reverse" width="100vw" height="25vh"></box-component>