import Cl_mAspirante from "./Cl_mAspirante.js";
export default class Cl_mConcurso {
    aspirantes = [];
    constructor() { }
    procesarAspirante(datos) {
        // Buscamos si ya existe por cédula
        let existe = this.aspirantes.find(a => a.cedula === datos.cedula);
        if (existe) {
            // MODO EDICIÓN: Actualizamos los datos del objeto existente
            existe.nombre = datos.nombre;
            existe.nota51 = datos.nota51;
            existe.nota52 = datos.nota52;
            existe.nota53 = datos.nota53;
            existe.nota54 = datos.nota54;
            existe.nota511 = datos.nota511;
            existe.nota512 = datos.nota512;
            existe.nota513 = datos.nota513;
            existe.nota514 = datos.nota514;
            existe.nota515 = datos.nota515;
            existe.nota516 = datos.nota516;
            existe.nota517 = datos.nota517;
        }
        else {
            // MODO AGREGAR: Creamos uno nuevo
            this.aspirantes.push(new Cl_mAspirante(datos));
        }
        return true;
    }
    eliminarAspirante(cedula) {
        let index = this.aspirantes.findIndex(a => a.cedula === cedula);
        if (index !== -1) {
            this.aspirantes.splice(index, 1);
            return true;
        }
        return false;
    }
    getAspirante(cedula) {
        return this.aspirantes.find(a => a.cedula === cedula);
    }
    get dtAspirantes() {
        return this.aspirantes;
    }
}
