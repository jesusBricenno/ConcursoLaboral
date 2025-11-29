export default class Cl_controlador {
    modelo;
    vConcurso;
    vAspirante;
    constructor(modelo, vConcurso, vAspirante) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vAspirante = vAspirante;
    }
    guardarAspirante(datos) {
        this.modelo.procesarAspirante(datos);
        this.mostrarVista("lista");
    }
    eliminarAspirante(cedula) {
        if (confirm(`¿Eliminar a ${cedula}?`)) {
            this.modelo.eliminarAspirante(cedula);
            this.vConcurso.refrescarTabla();
        }
    }
    editarAspirante(cedula) {
        let aspirante = this.modelo.getAspirante(cedula);
        if (aspirante) {
            this.vAspirante.cargarDatos(aspirante);
            this.mostrarVista("form");
        }
    }
    mostrarVista(vista) {
        if (vista === "lista") {
            this.vAspirante.ocultar();
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla();
        }
        else {
            this.vConcurso.ocultar();
            this.vAspirante.mostrar();
        }
    }
    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}
