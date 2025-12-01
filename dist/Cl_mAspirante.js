export default class Cl_mAspirante {
    _nombre = "";
    _cedula = "";
    _nota51 = 0;
    _nota52 = 0;
    _nota53 = 0;
    _nota54 = 0;
    _nota511 = 0;
    _nota512 = 0;
    _nota513 = 0;
    _nota514 = 0;
    _nota515 = 0;
    _nota516 = 0;
    _nota517 = 0;
    constructor({ nombre, cedula, nota51, nota52, nota53, nota54, nota511, nota512, nota513, nota514, nota515, nota516, nota517, }) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.nota51 = nota51;
        this.nota52 = nota52;
        this.nota53 = nota53;
        this.nota54 = nota54;
        this.nota511 = nota511;
        this.nota512 = nota512;
        this.nota513 = nota513;
        this.nota514 = nota514;
        this.nota515 = nota515;
        this.nota516 = nota516;
        this.nota517 = nota517;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nota51(nt51) {
        this._nota51 = nt51 > 0 || nt51 <= 25 ? nt51 : 0;
    }
    get nota51() {
        return this._nota51;
    }
    set nota52(nt52) {
        this._nota52 = nt52 > 0 || nt52 <= 20 ? nt52 : 0;
    }
    get nota52() {
        return this._nota52;
    }
    set nota53(nt53) {
        this._nota53 = nt53 > 0 || nt53 <= 6 ? nt53 : 0;
    }
    get nota53() {
        return this._nota53;
    }
    set nota54(nt54) {
        this._nota51 = nt54 > 0 || nt54 <= 5 ? nt54 : 0;
    }
    get nota54() {
        return this._nota54;
    }
    set nota511(nt511) {
        this._nota511 = nt511 > 0 && nt511 <= 25 ? nt511 : 0;
    }
    get nota511() {
        return this._nota511;
    }
    set nota512(nt512) {
        this._nota512 = nt512 > 0 && nt512 <= 10 ? nt512 : 0;
    }
    get nota512() {
        return this._nota512;
    }
    set nota513(nt513) {
        this._nota513 = nt513 > 0 && nt513 <= 3 ? nt513 : 0;
    }
    get nota513() {
        return this._nota513;
    }
    set nota514(nt514) {
        this._nota514 = nt514 > 0 && nt514 <= 5 ? nt514 : 0;
    }
    get nota514() {
        return this._nota514;
    }
    set nota515(nt515) {
        this._nota515 = nt515 > 0 && nt515 <= 3 ? nt515 : 0;
    }
    get nota515() {
        return this._nota515;
    }
    set nota516(nt516) {
        this._nota516 = nt516 > 0 && nt516 <= 3 ? nt516 : 0;
    }
    get nota516() {
        return this._nota516;
    }
    set nota517(nt517) {
        this._nota517 = nt517 > 0 && nt517 <= 3 ? nt517 : 0;
    }
    get nota517() {
        return this._nota517;
    }
    notaFormato5() {
        const sumaTotal5 = this.nota51 + this.nota52 + this.nota53 + this.nota54;
        if (sumaTotal5 >= 35) {
            return 35;
        }
        else {
            return sumaTotal5;
        }
    }
    notaFormato51() {
        const sumaTotal51 = this.nota511 + this.nota512 + this.nota513 + this.nota514 + this.nota515 + this.nota516 + this.nota517;
        if (sumaTotal51 >= 30) {
            return 30;
        }
        else {
            return sumaTotal51;
        }
    }
    error() {
        if (this.nombre.length === 0) {
            return "El nombre no puede estar vacío";
        }
        if (this.cedula.length === 0) {
            return "La cédula no puede estar vacía";
        }
        return false;
    }
    toJSON() {
        return {
            nombre: this.nombre,
            cedula: this.cedula,
            nota51: this.nota51,
            nota52: this.nota52,
            nota53: this.nota53,
            nota54: this.nota54,
            nota511: this.nota511,
            nota512: this.nota512,
            nota513: this.nota513,
            nota514: this.nota514,
            nota515: this.nota515,
            nota516: this.nota516,
            nota517: this.nota517,
        };
    }
}
