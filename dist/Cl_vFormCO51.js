import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class ClvFormCO51 extends Cl_vGeneral {
    // public controlador: Cl_controlador | null = null;
    inCedulaHidden;
    inNota511;
    inNota512;
    inNota513;
    inNota514;
    inNota515;
    inNota516;
    inNota517;
    btVolver;
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
    cargarDatos(aspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota511.value = String(aspirante.nota511);
        this.inNota512.value = String(aspirante.nota512);
        this.inNota513.value = String(aspirante.nota513);
        this.inNota514.value = String(aspirante.nota514);
        this.inNota515.value = String(aspirante.nota515);
        this.inNota516.value = String(aspirante.nota516);
        this.inNota517.value = String(aspirante.nota517);
    }
    volver() {
        const datos = {
            cedula: this.inCedulaHidden.value,
            nota511: +this.inNota511.value, nota512: +this.inNota512.value,
            nota513: +this.inNota513.value, nota514: +this.inNota514.value,
            nota515: +this.inNota515.value, nota516: +this.inNota516.value,
            nota517: +this.inNota517.value,
        };
        this.controlador?.procesarAspirante(datos);
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
