import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso{
    private _aspirantes: Cl_mAspirante[] = [];

agregarAspirante({
    aspirante,
    callback,
}: {
    aspirante: Cl_mAspirante;
    callback: (error: string | false) => void;
}): void {
    let error = aspirante.error();
    if(error) {
        callback(error);
        return;
    }

    let existe = this._aspirantes.find((a) => a.cedula === aspirante.cedula);
    if(existe){
        callback ("La cédula ya está registrada");
        return;
    }   
}

procesarAspirantes(aspirantes: Cl_mAspirante){
    this._aspirantes.push(aspirantes);
}

}