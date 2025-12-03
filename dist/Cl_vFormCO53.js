import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vFormCO53 extends Cl_vGeneral {
    inCedulaHidden;
    inNota531;
    inNota532;
    inNota533;
    inNota534;
    inNota535;
    inNota536;
    inNota537;
    inNota538;
    btVolver;
    constructor() {
        super({ formName: "formCO53" });
        this.inCedulaHidden = this.crearHTMLInputElement("inCedulaHidden");
        this.inNota531 = this.crearHTMLInputElement("inNota531");
        this.inNota532 = this.crearHTMLInputElement("inNota532");
        this.inNota533 = this.crearHTMLInputElement("inNota533");
        this.inNota534 = this.crearHTMLInputElement("inNota534");
        this.inNota535 = this.crearHTMLInputElement("inNota535");
        this.inNota536 = this.crearHTMLInputElement("inNota536");
        this.inNota537 = this.crearHTMLInputElement("inNota537");
        this.inNota538 = this.crearHTMLInputElement("inNota538");
        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }
    cargarDatos(aspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota531.value = String(aspirante.nota531);
        this.inNota532.value = String(aspirante.nota532);
        this.inNota533.value = String(aspirante.nota533);
        this.inNota534.value = String(aspirante.nota534);
        this.inNota535.value = String(aspirante.nota535);
        this.inNota536.value = String(aspirante.nota536);
        this.inNota537.value = String(aspirante.nota537);
        this.inNota538.value = String(aspirante.nota538);
    }
    volver() {
        const datos = {
            cedula: this.inCedulaHidden.value,
            nota531: +this.inNota531.value, nota532: +this.inNota532.value,
            nota533: +this.inNota533.value, nota534: +this.inNota534.value,
            nota535: +this.inNota535.value, nota536: +this.inNota536.value,
            nota537: +this.inNota537.value, nota538: +this.inNota538.value
        };
        this.controlador?.procesarAspirante(datos);
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
