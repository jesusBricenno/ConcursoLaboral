import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vFormCO5 extends Cl_vGeneral {
    inCedulaHidden;
    inNota51;
    inNota52;
    inNota53;
    inNota54;
    btVolver;
    constructor() {
        super({ formName: "formCO5" });
        this.inCedulaHidden = this.crearHTMLInputElement("inCedulaHidden");
        this.inNota51 = this.crearHTMLInputElement("inNota51");
        this.inNota52 = this.crearHTMLInputElement("inNota52");
        this.inNota53 = this.crearHTMLInputElement("inNota53");
        this.inNota54 = this.crearHTMLInputElement("inNota54");
        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }
    cargarDatos(aspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota51.value = String(aspirante.nota51);
        this.inNota52.value = String(aspirante.nota52);
        this.inNota53.value = String(aspirante.nota53);
        this.inNota54.value = String(aspirante.nota54);
    }
    volver() {
        const datos = {
            cedula: this.inCedulaHidden.value,
            nota51: +this.inNota51.value,
            nota52: +this.inNota52.value,
            nota53: +this.inNota53.value,
            nota54: +this.inNota54.value,
        };
        this.controlador?.procesarAspirante(datos);
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
