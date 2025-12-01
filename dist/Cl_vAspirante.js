import Cl_vGeneral from "./tools/Cl_vGeneral.js";
export default class Cl_vAspirante extends Cl_vGeneral {
    inNombre;
    inCedula;
    inNota51;
    inNota52;
    inNota53;
    inNota54;
    inNota511;
    inNota512;
    inNota513;
    inNota514;
    inNota515;
    inNota516;
    inNota517;
    btVolver;
    //private btCancelar: HTMLButtonElement;
    constructor() {
        super({ formName: "formCO5" });
        this.inNombre = this.crearHTMLInputElement("inNombre");
        this.inCedula = this.crearHTMLInputElement("inCedula");
        this.inNota51 = this.crearHTMLInputElement("inNota51");
        this.inNota52 = this.crearHTMLInputElement("inNota52");
        this.inNota53 = this.crearHTMLInputElement("inNota53");
        this.inNota54 = this.crearHTMLInputElement("inNota54");
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
        /*   this.btCancelar = this.crearHTMLButtonElement("btCancelar", {
               onclick: () => this.cancelar()
           });*/
    }
    cargarDatos(aspirante) {
        this.inCedula.value = aspirante.cedula;
        this.inCedula.disabled = true;
        this.inNombre.value = aspirante.nombre;
        this.inNota51.value = String(aspirante.nota51);
        this.inNota52.value = String(aspirante.nota52);
        this.inNota53.value = String(aspirante.nota53);
        this.inNota54.value = String(aspirante.nota54);
        this.inNota511.value = String(aspirante.nota511);
        this.inNota512.value = String(aspirante.nota512);
        this.inNota513.value = String(aspirante.nota513);
        this.inNota514.value = String(aspirante.nota514);
        this.inNota515.value = String(aspirante.nota515);
        this.inNota516.value = String(aspirante.nota516);
        this.inNota517.value = String(aspirante.nota517);
    }
    limpiar() {
        this.inCedula.disabled = false;
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inNota51.value = "";
        this.inNota52.value = "";
        this.inNota53.value = "";
        this.inNota54.value = "";
        this.inNota511.value = "";
        this.inNota512.value = "";
        this.inNota513.value = "";
        this.inNota514.value = "";
        this.inNota515.value = "";
        this.inNota516.value = "";
        this.inNota517.value = "";
    }
    /*private cancelar() {
        this.limpiar();
        this.controlador?.mostrarVista("lista");
    }*/
    volver() {
        if (!this.inCedula.value) {
            alert("La cédula es obligatoria");
            return;
        }
        const datos = {
            cedula: this.inCedula.value,
            nombre: this.inNombre.value,
            nota51: +this.inNota51.value, nota52: +this.inNota52.value,
            nota53: +this.inNota53.value, nota54: +this.inNota54.value,
            nota511: +this.inNota511.value, nota512: +this.inNota512.value,
            nota513: +this.inNota513.value, nota514: +this.inNota514.value,
            nota515: +this.inNota515.value, nota516: +this.inNota516.value,
            nota517: +this.inNota517.value,
        };
        this.controlador?.guardarAspirante(datos);
        this.limpiar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
