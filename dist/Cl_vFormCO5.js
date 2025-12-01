import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vFormCO5 extends Cl_vGeneral {
    // public controlador: Cl_controlador | null = null;
    inCedulaHidden; // Para saber a quién guardarle la nota
    inNota51;
    inNota52;
    inNota53;
    inNota54;
    btVolver;
    constructor() {
        super({ formName: "formCO5" });
        // Input oculto para persistencia
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
        // Al volver, recuperamos la cedula oculta y las nuevas notas
        const datos = {
            cedula: this.inCedulaHidden.value,
            // El nombre no se toca aqui, pero el modelo lo requiere, 
            // sin embargo el metodo 'procesar' busca por cedula y actualiza campos.
            // Pasamos solo lo necesario si el modelo lo permite, o recuperamos todo.
            // Para simplificar, asumimos que el modelo hace merge.
            nota51: +this.inNota51.value,
            nota52: +this.inNota52.value,
            nota53: +this.inNota53.value,
            nota54: +this.inNota54.value,
        };
        // NOTA: Como procesarAspirante busca por cedula, actualizará estas notas
        // manteniendo los demás datos intactos (ver lógica en Cl_mConcurso)
        this.controlador?.procesarAspirante(datos);
    }
    mostrar() { this.vista.hidden = false; }
    ocultar() { this.vista.hidden = true; }
}
