export default class Cl_mAspirante{
    public _nombre="";
    public _cedula="";
    public _nota51=0;
    public _nota52=0;
    public _nota53=0;
    public _nota54=0;
    public _nota511=0;
    public _nota512=0;
    public _nota513=0;
    public _nota514=0;
    public _nota515=0;
    public _nota516=0;
    public _nota517=0;
    constructor({
        nombre,
        cedula,
        nota51,
        nota52,
        nota54,
        nota512,
        nota53,
        nota514,
        nota511,
        nota516,
        nota513,
        nota517,
        nota515,
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
        this._nombre=nombre;
    }
    get nombre():string{
        return this._nombre;
    }
    set cedula(cedula:string){
        this._cedula=cedula;
    }
    get cedula():string{
        return this._cedula;
    }
    set nota51(nt51: number){
    this.nota51 = nt51 > 0 && nt51 <= 7 ? nt51  : 0;
    }
    get nota51(): number {
    return this.nota51;
    }
    set nota52(nt52: number){
    this.nota52 = nt52 > 0 && nt52 <= 7 ? nt52  : 0;
    }
    get nota52(): number {
    return this.nota52;
    }
    set nota53(nt53: number){
    this.nota53 = nt53 > 0 && nt53 <= 7 ? nt53  : 0;
    }
    get nota53(): number {
    return this.nota53;
    }
    set nota54(nt54: number){
    this.nota51 = nt54 > 0 && nt54 <= 7 ? nt54  : 0;
    }
    get nota54(): number {
    return this.nota54;
    }
    set nota511(nt511: number){
    this.nota511 = nt511 > 0 && nt511 <= 7 ? nt511  : 0;
    }
    get nota511(): number {
    return this.nota511;
    }
    set nota512(nt512: number){
    this.nota512 = nt512 > 0 && nt512 <= 7 ? nt512  : 0;
    }
    get nota512(): number {
    return this.nota512;
    }
    set nota513(nt513: number){
    this.nota513 = nt513 > 0 && nt513 <= 7 ? nt513  : 0;
    }
    get nota513(): number {
    return this.nota513;
    }
    set nota514(nt514: number){
    this.nota514 = nt514 > 0 && nt514 <= 7 ? nt514  : 0;
    }
    get nota514(): number {
    return this.nota514;
    }
    set nota515(nt515: number){
    this.nota515 = nt515 > 0 && nt515 <= 7 ? nt515  : 0;
    }
    get nota515(): number {
    return this.nota515;
    }
    set nota516(nt516: number){
    this.nota516 = nt516 > 0 && nt516 <= 7 ? nt516  : 0;
    }
    get nota516(): number {
    return this.nota516;
    }
    set nota517(nt517: number){
    this.nota517 = nt517 > 0 && nt517 <= 7 ? nt517  : 0;
    }
    get nota517(): number {
    return this.nota517;
    }
    notaFormato5(){
        return this.nota51+this.nota52+this.nota53+this.nota54
    }
    notaFormato51(){
        return this.nota511+this.nota512+this.nota513+this.nota514+this.nota515+this.nota516+this.nota517
    }
    
}