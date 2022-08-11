import Dom from "../../common/js/abstract/dom.js";


export default class Popup extends Dom {


    

    createRact = () => {

        const SAMPLE_CSS = {
            "border":"1.5px solid #432918",
            "height": "100px",
            "background":"red"
        }

        let lect = `<div>
                        <div style="${this.convertCss(SAMPLE_CSS)}">
                        </div>
                    </div>`;

        this.render = lect;

    }
}



let pop = new Popup();
pop.createRact();
pop.append(document.body);