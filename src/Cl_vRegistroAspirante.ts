import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vRegistroAspirante extends Cl_vGeneral {
    private inNombre: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private btVolver: HTMLButtonElement;
    
    constructor(){
        super({formName: "registroAspirante"})
        this.inNombre = this.crearHTMLInputElement("inNombre");
        this.inCedula = this.crearHTMLInputElement("inCedula");
        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }

    private volver(){
        if (!this.inCedula.value || !this.inNombre.value){
            alert("Debe ingresar Cédula y Nombre");
            return;
        }
        const datos = {
            nombre: this.inNombre.value.trim().toUpperCase(),
            cedula: this.inCedula.value.trim(),
            nota51:0, nota52:0, nota53:0, nota54:0,
            nota511:0, nota512:0, nota513:0, nota514:0,
            nota515:0, nota516:0, nota517:0
        };

        this.controlador?.procesarAspirante(datos);
        this.limpiar();
    }

    private limpiar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
    }

    public mostrar() { this.vista!.hidden = false; }
    public ocultar() { this.vista!.hidden = true; }
}