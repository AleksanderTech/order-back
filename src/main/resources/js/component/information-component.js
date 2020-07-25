export class InformationComponent {

    constructor(informationComponent) {
        this.informationComponent = informationComponent;
        this.information = this.informationComponent.querySelector('.information');
        this.registerHandlers();
    }

    registerHandlers() {
        this.informationComponent.querySelector('.close').addEventListener('click', () => {
            this.informationComponent.style.display = 'none';
        })
    }

    show(information) {
        console.log(information);
        this.informationComponent.style.display = 'block';
        this.information.innerText = information;
    }

    close() {
        this.informationComponent.style.display = 'none';
    }
}
