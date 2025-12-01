import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_vFormCO5 extends Cl_vGeneral {
    
    private inCedulaHidden: HTMLInputElement;
    private inNota51: HTMLInputElement; 
    private inNota52: HTMLInputElement;
    private inNota53: HTMLInputElement; 
    private inNota54: HTMLInputElement;
    private btVolver: HTMLButtonElement;

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

    public cargarDatos(aspirante: Cl_mAspirante) {
        this.inCedulaHidden.value = aspirante.cedula;
        this.inNota51.value = String(aspirante.nota51);
        this.inNota52.value = String(aspirante.nota52);
        this.inNota53.value = String(aspirante.nota53);
        this.inNota54.value = String(aspirante.nota54);
    }

    private volver() {
        const datos: any = {
            cedula: this.inCedulaHidden.value, 
            nota51: +this.inNota51.value, 
            nota52: +this.inNota52.value,
            nota53: +this.inNota53.value, 
            nota54: +this.inNota54.value,
        };
        
        this.controlador?.procesarAspirante(datos);
    }

    public mostrar() { this.vista!.hidden = false; }
    public ocultar() { this.vista!.hidden = true; }
}