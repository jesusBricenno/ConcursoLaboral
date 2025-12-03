import Cl_mAspirante from "./Cl_mAspirante.js";
export default class Cl_mConcurso {
    aspirantes = [];
    STORAGE_KEY = "concurso_laboral_data";
    constructor() {
        this.cargar();
    }
    cargar() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (data) {
            try {
                const json = JSON.parse(data);
                this.aspirantes = json.map((d) => new Cl_mAspirante(d));
            }
            catch (error) {
                console.error("Error al cargar datos del almacenamiento local:", error);
                this.aspirantes = [];
            }
        }
    }
    guardar() {
        const data = this.aspirantes.map(asp => asp.toJSON());
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }
    procesarAspirante(datos) {
        let existe = this.aspirantes.find(a => a.cedula === datos.cedula);
        if (existe) {
            if (datos.nombre)
                existe.nombre = datos.nombre;
            // Notas F5
            if (datos.nota51 !== undefined)
                existe.nota51 = datos.nota51;
            if (datos.nota52 !== undefined)
                existe.nota52 = datos.nota52;
            if (datos.nota53 !== undefined)
                existe.nota53 = datos.nota53;
            if (datos.nota54 !== undefined)
                existe.nota54 = datos.nota54;
            // Notas F5.1
            if (datos.nota511 !== undefined)
                existe.nota511 = datos.nota511;
            if (datos.nota512 !== undefined)
                existe.nota512 = datos.nota512;
            if (datos.nota513 !== undefined)
                existe.nota513 = datos.nota513;
            if (datos.nota514 !== undefined)
                existe.nota514 = datos.nota514;
            if (datos.nota515 !== undefined)
                existe.nota515 = datos.nota515;
            if (datos.nota516 !== undefined)
                existe.nota516 = datos.nota516;
            if (datos.nota517 !== undefined)
                existe.nota517 = datos.nota517;
            // Notas F5.2
            if (datos.nota521 !== undefined)
                existe.nota521 = datos.nota521;
            if (datos.nota522 !== undefined)
                existe.nota522 = datos.nota522;
            if (datos.nota523 !== undefined)
                existe.nota523 = datos.nota523;
            if (datos.nota524 !== undefined)
                existe.nota524 = datos.nota524;
            if (datos.nota525 !== undefined)
                existe.nota525 = datos.nota525;
            if (datos.nota526 !== undefined)
                existe.nota526 = datos.nota526;
            if (datos.nota527 !== undefined)
                existe.nota527 = datos.nota527;
            if (datos.nota528 !== undefined)
                existe.nota528 = datos.nota528;
            if (datos.nota529 !== undefined)
                existe.nota529 = datos.nota529;
            // Notas F5.3
            if (datos.nota531 !== undefined)
                existe.nota531 = datos.nota531;
            if (datos.nota532 !== undefined)
                existe.nota532 = datos.nota532;
            if (datos.nota533 !== undefined)
                existe.nota533 = datos.nota533;
            if (datos.nota534 !== undefined)
                existe.nota534 = datos.nota534;
            if (datos.nota535 !== undefined)
                existe.nota535 = datos.nota535;
            if (datos.nota536 !== undefined)
                existe.nota536 = datos.nota536;
            if (datos.nota537 !== undefined)
                existe.nota537 = datos.nota537;
            if (datos.nota538 !== undefined)
                existe.nota538 = datos.nota538;
        }
        else {
            this.aspirantes.push(new Cl_mAspirante(datos));
        }
        this.guardar();
        return true;
    }
    eliminarAspirante(cedula) {
        let index = this.aspirantes.findIndex(a => a.cedula === cedula);
        if (index !== -1) {
            this.aspirantes.splice(index, 1);
            this.guardar();
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
