import Cl_vGeneral from "./tools/Cl_vGeneral.js";
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_vAspirante extends Cl_vGeneral {
    
    private inNombre: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inNota51: HTMLInputElement; private inNota52: HTMLInputElement;
    private inNota53: HTMLInputElement; private inNota54: HTMLInputElement;
    private inNota511: HTMLInputElement; private inNota512: HTMLInputElement;
    private inNota513: HTMLInputElement; private inNota514: HTMLInputElement;
    private inNota515: HTMLInputElement; private inNota516: HTMLInputElement;
    private inNota517: HTMLInputElement;

    private btVolver: HTMLButtonElement;
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

    public cargarDatos(aspirante: Cl_mAspirante) {
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

    private limpiar() {
        this.inCedula.disabled = false;
        this.inCedula.value = "";
        this.inNombre.value = "";
        this.inNota51.value = ""; this.inNota52.value = "";
        this.inNota53.value = ""; this.inNota54.value = "";
        this.inNota511.value = ""; this.inNota512.value = "";
        this.inNota513.value = ""; this.inNota514.value = "";
        this.inNota515.value = ""; this.inNota516.value = "";
        this.inNota517.value = "";
    }

    /*private cancelar() {
        this.limpiar();
        this.controlador?.mostrarVista("lista");
    }*/

    private volver() {
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

    public mostrar() {
        this.vista!.hidden = false;
    }
    public ocultar() {
        this.vista!.hidden = true;
    }
}