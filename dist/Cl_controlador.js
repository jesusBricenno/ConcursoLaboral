export default class Cl_controlador {
    modelo;
    vConcurso;
    vRegistro;
    vFormCO5;
    vFormCO51;
    constructor(modelo, vConcurso, vRegistro, vFormCO5, vFormCO51) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vRegistro = vRegistro;
        this.vFormCO5 = vFormCO5;
        this.vFormCO51 = vFormCO51;
    }
    procesarAspirante(datos) {
        this.modelo.procesarAspirante(datos);
        this.mostrarVista("aspirantes");
    }
    eliminarAspirante(cedula) {
        if (confirm(`¿Está seguro de eliminar al aspirante ${cedula}?`)) {
            this.modelo.eliminarAspirante(cedula);
            this.vConcurso.refrescarTabla();
        }
    }
    editarF5(cedula) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO5.cargarDatos(aspirante);
            this.mostrarVista("formCO5");
        }
    }
    editarF51(cedula) {
        const aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vFormCO51.cargarDatos(aspirante);
            this.mostrarVista("formCO51");
        }
    }
    mostrarVista(vista) {
        this.vConcurso.ocultar();
        this.vRegistro.ocultar();
        this.vFormCO5.ocultar();
        this.vFormCO51.ocultar();
        if (vista === "aspirantes") {
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla();
        }
        else if (vista === "registro") {
            this.vRegistro.mostrar();
        }
        else if (vista === "formCO5") {
            this.vFormCO5.mostrar();
        }
        else if (vista === "formCO51") {
            this.vFormCO51.mostrar();
        }
    }
    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}
