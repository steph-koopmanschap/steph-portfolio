export default class App extends HTMLElement {
    constructor() {
        super();
    }

    //When the component mounts or loads
    connectedCallback() {
        this.innerHTML = `        
        <div>
            <pink-black-animation></pink-black-animation>
        </div>
    `;
    }
}


