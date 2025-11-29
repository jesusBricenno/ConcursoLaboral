export default class Cl_mAspirante {
    _nombre;
    _cedula;
    nota51;
    nota52;
    nota53;
    nota54;
    nota511;
    nota512;
    nota513;
    nota514;
    nota515;
    nota516;
    nota517;
    constructor(datos = {
        nombre: "", cedula: "",
        nota51: 0, nota52: 0, nota53: 0, nota54: 0,
        nota511: 0, nota512: 0, nota513: 0, nota514: 0,
        nota515: 0, nota516: 0, nota517: 0
    }) {
        this._nombre = datos.nombre;
        this._cedula = datos.cedula;
        this.nota51 = datos.nota51;
        this.nota52 = datos.nota52;
        this.nota53 = datos.nota53;
        this.nota54 = datos.nota54;
        this.nota511 = datos.nota511;
        this.nota512 = datos.nota512;
        this.nota513 = datos.nota513;
        this.nota514 = datos.nota514;
        this.nota515 = datos.nota515;
        this.nota516 = datos.nota516;
        this.nota517 = datos.nota517;
    }
    set nombre(n) { this._nombre = n.toUpperCase(); }
    get nombre() { return this._nombre; }
    set cedula(c) { this._cedula = c; }
    get cedula() { return this._cedula; }
    calcTotalF5() {
        return this.nota51 + this.nota52 + this.nota53 + this.nota54;
    }
    toJSON() {
        return {
            nombre: this.nombre, cedula: this.cedula,
            nota51: this.nota51, nota52: this.nota52, nota53: this.nota53, nota54: this.nota54,
            nota511: this.nota511, nota512: this.nota512, nota513: this.nota513, nota514: this.nota514,
            nota515: this.nota515, nota516: this.nota516, nota517: this.nota517
        };
    }
}
