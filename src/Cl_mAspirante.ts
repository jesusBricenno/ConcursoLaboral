export interface iAspirante {
    nombre: string;
    cedula: string;
    nota51: number; nota52: number; nota53: number; nota54: number;
    nota511: number; nota512: number; nota513: number; nota514: number;
    nota515: number; nota516: number; nota517: number;
}

export default class Cl_mAspirante {
    private _nombre: string;
    private _cedula: string;
    public nota51: number; public nota52: number; public nota53: number; public nota54: number;
    public nota511: number; public nota512: number; public nota513: number; public nota514: number;
    public nota515: number; public nota516: number; public nota517: number;

    constructor(datos: iAspirante = {
        nombre: "", cedula: "",
        nota51: 0, nota52: 0, nota53: 0, nota54: 0,
        nota511: 0, nota512: 0, nota513: 0, nota514: 0,
        nota515: 0, nota516: 0, nota517: 0
    }) {
        this._nombre = datos.nombre;
        this._cedula = datos.cedula;
        this.nota51 = datos.nota51; this.nota52 = datos.nota52;
        this.nota53 = datos.nota53; this.nota54 = datos.nota54;
        this.nota511 = datos.nota511; this.nota512 = datos.nota512;
        this.nota513 = datos.nota513; this.nota514 = datos.nota514;
        this.nota515 = datos.nota515; this.nota516 = datos.nota516;
        this.nota517 = datos.nota517;
    }

    set nombre(n: string) { this._nombre = n.toUpperCase(); }
    get nombre() { return this._nombre; }

    set cedula(c: string) { this._cedula = c; }
    get cedula() { return this._cedula; }

    public calcTotalF5(): number {
        return this.nota51 + this.nota52 + this.nota53 + this.nota54;
    }

    // Método para exportar datos planos
    toJSON(): iAspirante {
        return {
            nombre: this.nombre, cedula: this.cedula,
            nota51: this.nota51, nota52: this.nota52, nota53: this.nota53, nota54: this.nota54,
            nota511: this.nota511, nota512: this.nota512, nota513: this.nota513, nota514: this.nota514,
            nota515: this.nota515, nota516: this.nota516, nota517: this.nota517
        };
    }
}