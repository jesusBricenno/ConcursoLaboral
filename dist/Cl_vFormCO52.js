import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vFormCO52 extends Cl_vGeneral {
    inCedulaHidden;
    inNota521;
    inNota522;
    inNota523;
    inNota524;
    inNota525;
    inNota526;
    inNota527;
    inNota528;
    inNota529;
    btVolver;
    constructor() {
        super({ formName: "formCO52" });
        this.inCedulaHidden = this.crearHTMLInputElement("inCedulaHidden");
        this.inNota521 = this.crearHTMLInputElement("inNota521");
        this.inNota522 = this.crearHTMLInputElement("inNota522");
        this.inNota523 = this.crearHTMLInputElement("inNota523");
        this.inNota524 = this.crearHTMLInputElement("inNota524");
        this.inNota525 = this.crearHTMLInputElement("inNota525");
        this.inNota526 = this.crearHTMLInputElement("inNota526");
        this.inNota527 = this.crearHTMLInputElement("inNota527");
        this.inNota528 = this.crearHTMLInputElement("inNota528");
        this.inNota529 = this.crearHTMLInputElement("inNota529");
        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }
    cargarDatos(aspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota521.value = String(aspirante.nota521);
        this.inNota522.value = String(aspirante.nota522);
        this.inNota523.value = String(aspirante.nota523);
        this.inNota524.value = String(aspirante.nota524);
        this.inNota525.value = String(aspirante.nota525);
        this.inNota526.value = String(aspirante.nota526);
        this.inNota527.value = String(aspirante.nota527);
        this.inNota528.value = String(aspirante.nota528);
        this.inNota529.value = String(aspirante.nota529);
    }
    volver() {
        const datos = {
            cedula: this.inCedulaHidden.value,
            nota521: +this.inNota521.value, nota522: +this.inNota522.value,
            nota523: +this.inNota523.value, nota524: +this.inNota524.value,
            nota525: +this.inNota525.value, nota526: +this.inNota526.value,
            nota527: +this.inNota527.value, nota528: +this.inNota528.value,
            nota529: +this.inNota529.value
        };
        this.controlador?.procesarAspirante(datos);
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
