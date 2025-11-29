import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vAspirante from "./Cl_vAspirante.js";
import { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_controlador {
    private modelo: Cl_mConcurso;
    private vConcurso: Cl_vConcurso;
    private vAspirante: Cl_vAspirante;

    constructor(modelo: Cl_mConcurso, vConcurso: Cl_vConcurso, vAspirante: Cl_vAspirante) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vAspirante = vAspirante;
    }

    public guardarAspirante(datos: iAspirante) {
        this.modelo.procesarAspirante(datos);
        this.mostrarVista("lista");
    }

    public eliminarAspirante(cedula: string) {
        if(confirm(`¿Eliminar a ${cedula}?`)){
            this.modelo.eliminarAspirante(cedula);
            this.vConcurso.refrescarTabla();
        }
    }

    public editarAspirante(cedula: string) {
        let aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vAspirante.cargarDatos(aspirante);
            this.mostrarVista("form");
        }
    }

    public mostrarVista(vista: "lista" | "form") {
        if (vista === "lista") {
            this.vAspirante.ocultar();
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla();
        } else {
            this.vConcurso.ocultar();
            this.vAspirante.mostrar();
        }
    }

    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}