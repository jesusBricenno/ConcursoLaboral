import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vRegistroAspirante extends Cl_vGeneral {
    inNombre;
    inCedula;
    btVolver;
    // public controlador: Cl_controlador | null = null;
    constructor() {
        super({ formName: "registroAspirante" });
        this.inNombre = this.crearHTMLInputElement("inNombre");
        this.inCedula = this.crearHTMLInputElement("inCedula");
        this.btVolver = this.crearHTMLButtonElement("btVolver", {
            onclick: () => this.volver()
        });
    }
    volver() {
        // Validación básica
        if (!this.inCedula.value || !this.inNombre.value) {
            alert("Debe ingresar Cédula y Nombre");
            return;
        }
        // Creamos objeto parcial, las notas se inicializan en 0 en el Modelo
        const datos = {
            nombre: this.inNombre.value.trim().toUpperCase(),
            cedula: this.inCedula.value.trim(),
            // Notas en 0 por defecto
            nota51: 0, nota52: 0, nota53: 0, nota54: 0,
            nota511: 0, nota512: 0, nota513: 0, nota514: 0,
            nota515: 0, nota516: 0, nota517: 0
        };
        this.controlador?.procesarAspirante(datos);
        this.limpiar();
    }
    limpiar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
