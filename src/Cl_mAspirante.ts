export interface iAspirante{
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
        this._nota51 = nt54 > 0 && nt54 <= 5 ? nt54 : 0;
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
            };
        }

    } 
