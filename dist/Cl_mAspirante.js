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
    _nota521 = 0;
    _nota522 = 0;
    _nota523 = 0;
    _nota524 = 0;
    _nota525 = 0;
    _nota526 = 0;
    _nota527 = 0;
    _nota528 = 0;
    _nota529 = 0;
    _nota531 = 0;
    _nota532 = 0;
    _nota533 = 0;
    _nota534 = 0;
    _nota535 = 0;
    _nota536 = 0;
    _nota537 = 0;
    _nota538 = 0;
    constructor({ nombre, cedula, nota51, nota52, nota53, nota54, nota511, nota512, nota513, nota514, nota515, nota516, nota517, nota521, nota522, nota523, nota524, nota525, nota526, nota527, nota528, nota529, nota531, nota532, nota533, nota534, nota535, nota536, nota537, nota538, }) {
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
        this._nota51 = nt51 > 0 && nt51 <= 25 ? nt51 : 0;
    }
    get nota51() {
        return this._nota51;
    }
    set nota52(nt52) {
        this._nota52 = nt52 > 0 && nt52 <= 20 ? nt52 : 0;
    }
    get nota52() {
        return this._nota52;
    }
    set nota53(nt53) {
        this._nota53 = nt53 > 0 && nt53 <= 6 ? nt53 : 0;
    }
    get nota53() {
        return this._nota53;
    }
    set nota54(nt54) {
        this._nota54 = nt54 > 0 && nt54 <= 5 ? nt54 : 0;
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
    //formatos 5.2 por implementar
    set nota521(nt521) {
        this._nota521 = nt521 > 0 && nt521 <= 15 ? nt521 : 0;
    }
    get nota521() {
        return this._nota521;
    }
    set nota522(nt522) {
        this._nota522 = nt522 > 0 && nt522 <= 12 ? nt522 : 0;
    }
    get nota522() {
        return this._nota522;
    }
    set nota523(nt523) {
        this._nota523 = nt523 > 0 && nt523 <= 10 ? nt523 : 0;
    }
    get nota523() {
        return this._nota523;
    }
    set nota524(nt524) {
        this._nota524 = nt524 > 0 && nt524 <= 6 ? nt524 : 0;
    }
    get nota524() {
        return this._nota524;
    }
    set nota525(nt525) {
        this._nota525 = nt525 > 0 && nt525 <= 4 ? nt525 : 0;
    }
    get nota525() {
        return this._nota525;
    }
    set nota526(nt526) {
        this._nota526 = nt526 > 0 && nt526 <= 3 ? nt526 : 0;
    }
    get nota526() {
        return this._nota526;
    }
    set nota527(nt527) {
        this._nota527 = nt527 > 0 && nt527 <= 10 ? nt527 : 0;
    }
    get nota527() {
        return this._nota527;
    }
    set nota528(nt528) {
        this._nota528 = nt528 > 0 && nt528 <= 6 ? nt528 : 0;
    }
    get nota528() {
        return this._nota528;
    }
    set nota529(nt529) {
        this._nota529 = nt529 > 0 && nt529 <= 15 ? nt529 : 0;
    }
    get nota529() {
        return this._nota529;
    }
    //5.3 por implementar
    set nota531(nt531) {
        this._nota531 = nt531 > 0 && nt531 <= 12 ? nt531 : 0;
    }
    get nota531() {
        return this._nota531;
    }
    set nota532(nt532) {
        this._nota532 = nt532 > 0 && nt532 <= 8 ? nt532 : 0;
    }
    get nota532() {
        return this._nota532;
    }
    set nota533(nt533) {
        this._nota533 = nt533 > 0 && nt533 <= 6 ? nt533 : 0;
    }
    get nota533() {
        return this._nota533;
    }
    set nota534(nt534) {
        this._nota534 = nt534 > 0 && nt534 <= 3 ? nt534 : 0;
    }
    get nota534() {
        return this._nota534;
    }
    set nota535(nt535) {
        this._nota535 = nt535 > 0 && nt535 <= 4 ? nt535 : 0;
    }
    get nota535() {
        return this._nota535;
    }
    set nota536(nt536) {
        this._nota536 = nt536 > 0 && nt536 <= 6 ? nt536 : 0;
    }
    get nota536() {
        return this._nota536;
    }
    set nota537(nt537) {
        this._nota537 = nt537 > 0 && nt537 <= 4 ? nt537 : 0;
    }
    get nota537() {
        return this._nota537;
    }
    set nota538(nt538) {
        this._nota538 = nt538 > 0 && nt538 <= 2 ? nt538 : 0;
    }
    get nota538() {
        return this._nota538;
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
    notaFormato52() {
        const sumaTotal52 = this.nota521 + this.nota522 + this.nota523 + this.nota524 + this.nota525 + this.nota526 + this.nota527 + this.nota528 + this.nota529;
        if (sumaTotal52 >= 15) {
            return 15;
        }
        else {
            return sumaTotal52;
        }
    }
    notaFormato53() {
        const sumaTotal53 = this.nota531 + this.nota532 + this.nota533 + this.nota534 + this.nota535 + this.nota536 + this.nota537 + this.nota538;
        if (sumaTotal53 >= 20) {
            return 20;
        }
        else {
            return sumaTotal53;
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
            nota521: this.nota521,
            nota522: this.nota522,
            nota523: this.nota523,
            nota524: this.nota524,
            nota525: this.nota525,
            nota526: this.nota526,
            nota527: this.nota527,
            nota528: this.nota528,
            nota529: this.nota529,
            nota531: this.nota531,
            nota532: this.nota532,
            nota533: this.nota533,
            nota534: this.nota534,
            nota535: this.nota535,
            nota536: this.nota536,
            nota537: this.nota537,
            nota538: this.nota538,
        };
    }
}
