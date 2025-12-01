import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vRegistroAspirante from "./Cl_vRegistroAspirante.js";
import Cl_vFormCO5 from "./Cl_vFormCO5.js";
import ClvFormCO51 from "./Cl_vFormCO51.js";
import { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_controlador {
    private modelo: Cl_mConcurso;
    private vConcurso: Cl_vConcurso;
    private vRegistro: Cl_vRegistroAspirante;
    private vFormCO5: Cl_vFormCO5;
    private vFormCO51: ClvFormCO51;

    constructor(
        modelo: Cl_mConcurso, 
        vConcurso: Cl_vConcurso, 
        vRegistro: Cl_vRegistroAspirante,
        vFormCO5: Cl_vFormCO5,
        vFormCO51: ClvFormCO51
    ) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vRegistro = vRegistro;
        this.vFormCO5 = vFormCO5;
        this.vFormCO51 = vFormCO51;
    }

    public procesarAspirante(datos: iAspirante) {
        this.modelo.procesarAspirante(datos);
        this.mostrarVista("aspirantes");
    }

    public eliminarAspirante(cedula: string) {
    if (confirm(`¿Está seguro de eliminar al aspirante ${cedula}?`)) {
        this.modelo.eliminarAspirante(cedula);
        this.vConcurso.refrescarTabla();
    }
}

    public editarF5(cedula: string) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO5.cargarDatos(aspirante);
            this.mostrarVista("formCO5");
        }
    }

    public editarF51(cedula: string) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO51.cargarDatos(aspirante);
            this.mostrarVista("formCO51");
        }
    }

    public mostrarVista(vista: "aspirantes" | "registro" | "formCO5" | "formCO51") {
        this.vConcurso.ocultar();
        this.vRegistro.ocultar();
        this.vFormCO5.ocultar();
        this.vFormCO51.ocultar();

        if (vista === "aspirantes") {
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla();
        } else if (vista === "registro") {
            this.vRegistro.mostrar();
        } else if (vista === "formCO5") {
            this.vFormCO5.mostrar();
        } else if (vista === "formCO51") {
            this.vFormCO51.mostrar();
        }
    }

    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}