import Cl_controlador from "./Cl_controlador.js";
import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vRegistroAspirante from "./Cl_vRegistroAspirante.js";
import Cl_vFormCO5 from "./Cl_vFormCO5.js";
import ClvFormCO51 from "./Cl_vFormCO51.js";
export default class Cl_index {
    constructor() {
        let modelo = new Cl_mConcurso();
        let vConcurso = new Cl_vConcurso();
        let vRegistro = new Cl_vRegistroAspirante();
        let vFormCO5 = new Cl_vFormCO5();
        let vFormCO51 = new ClvFormCO51();
        let controlador = new Cl_controlador(modelo, vConcurso, vRegistro, vFormCO5, vFormCO51);
        vConcurso.controlador = controlador;
        vRegistro.controlador = controlador;
        vFormCO5.controlador = controlador;
        vFormCO51.controlador = controlador;
        controlador.mostrarVista("aspirantes");
    }
}
