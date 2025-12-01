import Cl_mAspirante, { iAspirante } from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
    private aspirantes: Cl_mAspirante[] = [];

    constructor() {}

    public procesarAspirante(datos: any): boolean {
        let existe = this.aspirantes.find(a => a.cedula === datos.cedula);
        
        if (existe) {
            // Actualización PARCIAL: Solo actualiza si el dato viene en 'datos'
            if(datos.nombre) existe.nombre = datos.nombre;
            
            // Notas F5
            if(datos.nota51 !== undefined) existe.nota51 = datos.nota51;
            if(datos.nota52 !== undefined) existe.nota52 = datos.nota52;
            if(datos.nota53 !== undefined) existe.nota53 = datos.nota53;
            if(datos.nota54 !== undefined) existe.nota54 = datos.nota54;
            
            // Notas F5.1
            if(datos.nota511 !== undefined) existe.nota511 = datos.nota511;
            if(datos.nota512 !== undefined) existe.nota512 = datos.nota512;
            if(datos.nota513 !== undefined) existe.nota513 = datos.nota513;
            if(datos.nota514 !== undefined) existe.nota514 = datos.nota514;
            if(datos.nota515 !== undefined) existe.nota515 = datos.nota515;
            if(datos.nota516 !== undefined) existe.nota516 = datos.nota516;
            if(datos.nota517 !== undefined) existe.nota517 = datos.nota517;

        } else {
            // Creación nueva (datos debe estar completo o inicializado)
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