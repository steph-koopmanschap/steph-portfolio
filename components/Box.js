export default class Box extends HTMLElement {
    constructor() {
        super();

        const container = document.createElement('div');

        this.container = container;
    }

    //When the component mounts or loads
    connectedCallback() {
        const className = this.getAttribute('className');
        const width = this.getAttribute('width');
        const height = this.getAttribute('height');

        this.container.setAttribute("class", className);
        this.container.style.width = width;
        this.container.style.height = height;

        this.appendChild(this.container);
        //this.update();
    }
}


