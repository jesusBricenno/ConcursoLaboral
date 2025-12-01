import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAspirante from "./Cl_mAspirante.js";

export default class ClvFormCO51 extends Cl_vGeneral {

    private inCedulaHidden: HTMLInputElement;
    private inNota511: HTMLInputElement; private inNota512: HTMLInputElement;
    private inNota513: HTMLInputElement; private inNota514: HTMLInputElement;
    private inNota515: HTMLInputElement; private inNota516: HTMLInputElement;
    private inNota517: HTMLInputElement;
    private btVolver: HTMLButtonElement;

    constructor() {
        super({ formName: "formCO51" });
        
        this.inCedulaHidden = this.crearHTMLInputElement("inCedulaHidden");
        this.inNota511 = this.crearHTMLInputElement("inNota511");
        this.inNota512 = this.crearHTMLInputElement("inNota512");
        this.inNota513 = this.crearHTMLInputElement("inNota513");
        this.inNota514 = this.crearHTMLInputElement("inNota514");
        this.inNota515 = this.crearHTMLInputElement("inNota515");
        this.inNota516 = this.crearHTMLInputElement("inNota516");
        this.inNota517 = this.crearHTMLInputElement("inNota517");

        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }

    public cargarDatos(aspirante: Cl_mAspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota511.value = String(aspirante.nota511);
        this.inNota512.value = String(aspirante.nota512);
        this.inNota513.value = String(aspirante.nota513);
        this.inNota514.value = String(aspirante.nota514);
        this.inNota515.value = String(aspirante.nota515);
        this.inNota516.value = String(aspirante.nota516);
        this.inNota517.value = String(aspirante.nota517);
    }

    private volver() {
        const datos: any = {
            cedula: this.inCedulaHidden.value,
            nota511: +this.inNota511.value, nota512: +this.inNota512.value,
            nota513: +this.inNota513.value, nota514: +this.inNota514.value,
            nota515: +this.inNota515.value, nota516: +this.inNota516.value,
            nota517: +this.inNota517.value,
        };
        this.controlador?.procesarAspirante(datos);
    }

    public mostrar() { this.vista!.hidden = false; }
    public ocultar() { this.vista!.hidden = true; }
}