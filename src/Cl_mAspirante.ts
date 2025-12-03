export interface iAspirante{
    nombre:string;
    cedula:string;
    nota51?:number;
    nota52?:number;
    nota53?:number;
    nota54?:number;
    nota511?:number;
    nota512?:number;
    nota513?:number;
    nota514?:number;
    nota515?:number;
    nota516?:number;
    nota517?:number;
    nota521?:number;
    nota522?:number;
    nota523?:number;
    nota524?:number;
    nota525?:number;
    nota526?:number;
    nota527?:number;
    nota528?:number;
    nota529?:number;
    nota531?:number;
    nota532?:number;
    nota533?:number;
    nota534?:number;
    nota535?:number;
    nota536?:number;
    nota537?:number;
    nota538?:number;
}

export default class Cl_mAspirante{
    private _nombre="";
    private _cedula="";
    private _nota51=0;
    private _nota52=0;
    private _nota53=0;
    private _nota54=0;
    private _nota511=0;
    private _nota512=0;
    private _nota513=0;
    private _nota514=0;
    private _nota515=0;
    private _nota516=0;
    private _nota517=0;
    private _nota521=0;
    private _nota522=0;
    private _nota523=0;
    private _nota524=0;
    private _nota525=0;
    private _nota526=0;
    private _nota527=0;
    private _nota528=0;
    private _nota529=0;
    private _nota531=0;
    private _nota532=0;
    private _nota533=0;
    private _nota534=0;
    private _nota535=0;
    private _nota536=0;
    private _nota537=0;
    private _nota538=0;
    constructor({
        nombre,
        cedula,
        nota51,
        nota52,
        nota53,
        nota54,
        nota511,
        nota512,
        nota513,
        nota514,
        nota515,
        nota516,
        nota517,
        nota521,
        nota522,
        nota523,
        nota524,
        nota525,
        nota526,
        nota527,
        nota528,
        nota529,
        nota531,
        nota532,
        nota533,
        nota534,
        nota535,
        nota536,
        nota537,
        nota538,
}: {
    nombre:string;
    cedula:string;
    nota51:number;
    nota52:number;
    nota53:number;
    nota54:number;
    nota511:number;
    nota512:number;
    nota513:number;
    nota514:number;
    nota515:number;
    nota516:number;
    nota517:number;
    nota521:number;
    nota522:number;
    nota523:number;
    nota524:number;
    nota525:number;
    nota526:number;
    nota527:number;
    nota528:number;
    nota529:number;
    nota531:number;
    nota532:number;
    nota533:number;
    nota534:number;
    nota535:number;
    nota536:number;
    nota537:number;
    nota538:number;
    }){
        this.nombre=nombre;
        this.cedula=cedula;
        this.nota51=nota51;
        this.nota52=nota52;
        this.nota53=nota53;
        this.nota54=nota54;
        this.nota511=nota511;
        this.nota512=nota512;
        this.nota513=nota513;
        this.nota514=nota514;
        this.nota515=nota515;
        this.nota516=nota516;
        this.nota517=nota517;
    }

    set nombre(nombre:string){
        this._nombre = nombre;
    }
    get nombre():string{
        return this._nombre;
    }
    set cedula(cedula:string){
        this._cedula = cedula;
    }
    get cedula():string{
        return this._cedula;
    }
    set nota51(nt51: number){
        this._nota51 = nt51 > 0 && nt51 <= 25 ? nt51 : 0;
    }
    get nota51(): number {
        return this._nota51;
    }
    set nota52(nt52: number){
        this._nota52 = nt52 > 0 && nt52 <= 20 ? nt52 : 0;
    }
    get nota52(): number {
        return this._nota52;
    }
    set nota53(nt53: number){
        this._nota53 = nt53 > 0 && nt53 <= 6 ? nt53 : 0;
    }
    get nota53(): number {
        return this._nota53;
    }
    set nota54(nt54: number){
        this._nota54 = nt54 > 0 && nt54 <= 5 ? nt54 : 0;
    }
    get nota54(): number {
        return this._nota54;
    }
    set nota511(nt511: number){
        this._nota511 = nt511 > 0 && nt511 <= 25 ? nt511 : 0;
    }
    get nota511(): number {
        return this._nota511;
    }
    set nota512(nt512: number){
        this._nota512 = nt512 > 0 && nt512 <= 10 ? nt512 : 0;
    }
    get nota512(): number {
        return this._nota512;
    }
    set nota513(nt513: number){
        this._nota513 = nt513 > 0 && nt513 <= 3 ? nt513 : 0;
    }
    get nota513(): number {
        return this._nota513;
    }
    set nota514(nt514: number){
        this._nota514 = nt514 > 0 && nt514 <= 5 ? nt514 : 0;
    }
    get nota514(): number {
        return this._nota514;
    }
    set nota515(nt515: number){
        this._nota515 = nt515 > 0 && nt515 <= 3 ? nt515 : 0;
    }
    get nota515(): number {
        return this._nota515;
    }
    set nota516(nt516: number){
        this._nota516 = nt516 > 0 && nt516 <= 3 ? nt516 : 0;
    }
    get nota516(): number {
        return this._nota516;
    }
    set nota517(nt517: number){
        this._nota517 = nt517 > 0 && nt517 <= 3 ? nt517 : 0;
    }
    get nota517(): number {
        return this._nota517;
    }
    //formatos 5.2 por implementar
    set nota521(nt521: number){
        this._nota521 = nt521 > 0 && nt521 <= 15 ? nt521 : 0;
    }
    get nota521(): number {
        return this._nota521;
    }
    set nota522(nt522: number){
        this._nota522 = nt522 > 0 && nt522 <= 12 ? nt522 : 0;
    }
    get nota522(): number {
        return this._nota522;
    }
    set nota523(nt523: number){
        this._nota523 = nt523 > 0 && nt523 <= 10 ? nt523 : 0;
    }
    get nota523(): number {
        return this._nota523;
    }
    set nota524(nt524: number){
        this._nota524 = nt524 > 0 && nt524 <= 6 ? nt524 : 0;
    }
    get nota524(): number {
        return this._nota524;
    }
    set nota525(nt525: number){
        this._nota525 = nt525 > 0 && nt525 <= 4 ? nt525 : 0;
    }
    get nota525(): number {
        return this._nota525;
    }
    set nota526(nt526: number){
        this._nota526 = nt526 > 0 && nt526 <= 3 ? nt526 : 0;
    }
    get nota526(): number {
        return this._nota526;
    }
    set nota527(nt527: number){
        this._nota527 = nt527 > 0 && nt527 <= 10 ? nt527 : 0;
    }
    get nota527(): number {
        return this._nota527;
    }
    set nota528(nt528: number){
        this._nota528 = nt528 > 0 && nt528 <= 6 ? nt528 : 0;
    }
    get nota528(): number {
        return this._nota528;
    }
    set nota529(nt529: number){
        this._nota529 = nt529 > 0 && nt529 <= 15 ? nt529 : 0;
    }
    get nota529(): number {
        return this._nota529;
    }
    //5.3 por implementar
    
    set nota531(nt531: number){
        this._nota531 = nt531 > 0 && nt531 <= 12 ? nt531 : 0;
    }
    get nota531(): number {
        return this._nota531;
    }
    set nota532(nt532: number){
        this._nota532 = nt532 > 0 && nt532 <= 8 ? nt532 : 0;
    }
    get nota532(): number {
        return this._nota532;
    }
    set nota533(nt533: number){
        this._nota533 = nt533 > 0 && nt533 <= 6 ? nt533 : 0;
    }
    get nota533(): number {
        return this._nota533;
    }
    set nota534(nt534: number){
        this._nota534 = nt534 > 0 && nt534 <= 3 ? nt534 : 0;
    }
    get nota534(): number {
        return this._nota534;
    }
    set nota535(nt535: number){
        this._nota535 = nt535 > 0 && nt535 <= 4 ? nt535 : 0;
    }
    get nota535(): number {
        return this._nota535;
    }
    set nota536(nt536: number){
        this._nota536 = nt536 > 0 && nt536 <= 6 ? nt536 : 0;
    }
    get nota536(): number {
        return this._nota536;
    }
    set nota537(nt537: number){
        this._nota537 = nt537 > 0 && nt537 <= 4 ? nt537 : 0;
    }
    get nota537(): number {
        return this._nota537;
    }
    set nota538(nt538: number){
        this._nota538 = nt538 > 0 && nt538 <= 2 ? nt538 : 0;
    }
    get nota538(): number {
        return this._nota538;
    }

    notaFormato5(){
        const sumaTotal5 = this.nota51 + this.nota52 + this.nota53 + this.nota54;

        if ( sumaTotal5 >= 35) {
            return 35;
        }
        else {
            return sumaTotal5;
        }
    }
    notaFormato51(): number {
        const sumaTotal51 = this.nota511 + this.nota512 + this.nota513 + this.nota514 + this.nota515 + this.nota516 + this.nota517;
        
        if ( sumaTotal51 >= 30) {
            return 30;
        }
        else {
            return sumaTotal51;
        }
    }
    notaFormato52(): number {
        const sumaTotal52 = this.nota521 + this.nota522 + this.nota523 + this.nota524 + this.nota525 + this.nota526 + this.nota527+ this.nota528 + this.nota529;
        
        if ( sumaTotal52 >= 15) {
            return 15;
        }
        else {
            return sumaTotal52;
        }
    }
    notaFormato53(): number {
        const sumaTotal53 = this.nota531 + this.nota532 + this.nota533 + this.nota534 + this.nota535 + this.nota536 + this.nota537 + this.nota538;

        if (sumaTotal53 >= 20){
            return 20;
        }
        else {
            return sumaTotal53;
        }
    }

    error(): string | false {
        if (this.nombre.length === 0) {
            return "El nombre no puede estar vacío";
        }
        if (this.cedula.length === 0) {
            return "La cédula no puede estar vacía";
        }
        return false;
    }

        toJSON(): iAspirante {
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