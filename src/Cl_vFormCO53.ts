import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_vFormCO53 extends Cl_vGeneral {
    
    private inCedulaHidden: HTMLInputElement;
    private inNota531: HTMLInputElement; private inNota532: HTMLInputElement;
    private inNota533: HTMLInputElement; private inNota534: HTMLInputElement;
    private inNota535: HTMLInputElement; private inNota536: HTMLInputElement;
    private inNota537: HTMLInputElement; private inNota538: HTMLInputElement;
    
    private btVolver: HTMLButtonElement;

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

    public cargarDatos(aspirante: Cl_mAspirante) {
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

    private volver() {
        const datos: any = {
            cedula: this.inCedulaHidden.value,
            nota531: +this.inNota531.value, nota532: +this.inNota532.value,
            nota533: +this.inNota533.value, nota534: +this.inNota534.value,
            nota535: +this.inNota535.value, nota536: +this.inNota536.value,
            nota537: +this.inNota537.value, nota538: +this.inNota538.value
        };
        this.controlador?.procesarAspirante(datos);
    }

    public mostrar() { this.vista!.hidden = false; }
    public ocultar() { this.vista!.hidden = true; }
}