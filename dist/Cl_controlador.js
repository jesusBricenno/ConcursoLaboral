export default class Cl_controlador {
    modelo;
    vConcurso;
    vAspirante;
    constructor(modelo, vConcurso, vAspirante) {
        this.modelo = modelo;
        this.vConcurso = vConcurso;
        this.vAspirante = vAspirante;
    }
    // Lógica para guardar (Crear o Editar)
    guardarAspirante(datos) {
        this.modelo.procesarAspirante(datos);
        this.mostrarVista("lista"); // Volver a la lista
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
            // Cargamos los datos en el formulario y cambiamos de vista
            this.vAspirante.cargarDatos(aspirante);
            this.mostrarVista("form");
        }
    }
    // Gestión de Vistas
    mostrarVista(vista) {
        if (vista === "lista") {
            this.vAspirante.ocultar();
            this.vConcurso.mostrar();
            this.vConcurso.refrescarTabla(); // Recargar datos de la tabla
        }
        else {
            this.vConcurso.ocultar();
            this.vAspirante.mostrar();
        }
    }
    // Getter para que la vista de tabla acceda a los datos
    get aspirantes() {
        return this.modelo.dtAspirantes;
    }
}
