import Cl_mAspirante, { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
    private aspirantes: Cl_mAspirante[] = [];

    constructor() {}

    public procesarAspirante(datos: iAspirante): boolean {
        let existe = this.aspirantes.find(a => a.cedula === datos.cedula);
        
        if (existe) {
            existe.nombre = datos.nombre;
            existe.nota51 = datos.nota51; existe.nota52 = datos.nota52;
            existe.nota53 = datos.nota53; existe.nota54 = datos.nota54;
            existe.nota511 = datos.nota511; existe.nota512 = datos.nota512;
            existe.nota513 = datos.nota513; existe.nota514 = datos.nota514;
            existe.nota515 = datos.nota515; existe.nota516 = datos.nota516;
            existe.nota517 = datos.nota517;
        } else {
            this.aspirantes.push(new Cl_mAspirante(datos));
        }
        return true;
    }

    public eliminarAspirante(cedula: string): boolean {
        let index = this.aspirantes.findIndex(a => a.cedula === cedula);
        if (index !== -1) {
            this.aspirantes.splice(index, 1);
            return true;
        }
        return false;
    }

    public getAspirante(cedula: string): Cl_mAspirante | undefined {
        return this.aspirantes.find(a => a.cedula === cedula);
    }

    get dtAspirantes(): Cl_mAspirante[] {
        return this.aspirantes;
    }
}