import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vRegistroAspirante from "./Cl_vRegistroAspirante.js";
import Cl_vFormCO5 from "./Cl_vFormCO5.js";
import ClvFormCO51 from "./Cl_vFormCO51.js";
import Cl_vFormCO52 from "./Cl_vFormCO52.js";
import Cl_vFormCO53 from "./Cl_vFormCO53.js";
import { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_controlador {
    private modelo: Cl_mConcurso;
    private vConcurso: Cl_vConcurso;
    private vRegistro: Cl_vRegistroAspirante;
    private vFormCO5: Cl_vFormCO5;
    private vFormCO51: ClvFormCO51;
    private vFormCO52: Cl_vFormCO52;
    private vFormCO53: Cl_vFormCO53;

    constructor(
        modelo: Cl_mConcurso, 
        vConcurso: Cl_vConcurso, 
        vRegistro: Cl_vRegistroAspirante,
        vFormCO5: Cl_vFormCO5,
        vFormCO51: ClvFormCO51,
        vFormCO52: Cl_vFormCO52,
        vFormCO53: Cl_vFormCO53
    ) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vRegistro = vRegistro;
        this.vFormCO5 = vFormCO5;
        this.vFormCO51 = vFormCO51;
        this.vFormCO52 = vFormCO52;
        this.vFormCO53 = vFormCO53;
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
    public editarF52(cedula: string) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO52.cargarDatos(aspirante);
            this.mostrarVista("formCO52");
        }
    }
    public editarF53(cedula: string) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO53.cargarDatos(aspirante);
            this.mostrarVista("formCO53");
        }
    }

    public mostrarVista(vista: string) {
        this.vConcurso.ocultar();
        this.vRegistro.ocultar();
        this.vFormCO5.ocultar();
        this.vFormCO51.ocultar();
        this.vFormCO52.ocultar();
        this.vFormCO53.ocultar();

        if (vista === "aspirantes") {
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla();
        } else if (vista === "registro") {
            this.vRegistro.mostrar();
        } else if (vista === "formCO5") {
            this.vFormCO5.mostrar();
        } else if (vista === "formCO51") {
            this.vFormCO51.mostrar();
        } else if (vista === "formCO52") {
            this.vFormCO52.mostrar();
        } else if (vista === "formCO53") {
            this.vFormCO53.mostrar();
        }
    }

    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}