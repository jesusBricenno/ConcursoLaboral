import Cl_controlador from "./Cl_controlador.js";
import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vRegistroAspirante from "./Cl_vRegistroAspirante.js";
import Cl_vFormCO5 from "./Cl_vFormCO5.js";
import ClvFormCO51 from "./Cl_vFormCO51.js";
import Cl_vFormCO52 from "./Cl_vFormCO52.js";
import Cl_vFormCO53 from "./Cl_vFormCO53.js";
export default class Cl_index {
    constructor() {
        let modelo = new Cl_mConcurso();
        let vConcurso = new Cl_vConcurso();
        let vRegistro = new Cl_vRegistroAspirante();
        let vFormCO5 = new Cl_vFormCO5();
        let vFormCO51 = new ClvFormCO51();
        let vFormCO52 = new Cl_vFormCO52();
        let vFormCO53 = new Cl_vFormCO53();
        let controlador = new Cl_controlador(modelo, vConcurso, vRegistro, vFormCO5, vFormCO51, vFormCO52, vFormCO53);
        vConcurso.controlador = controlador;
        vRegistro.controlador = controlador;
        vFormCO5.controlador = controlador;
        vFormCO51.controlador = controlador;
        vFormCO52.controlador = controlador;
        vFormCO53.controlador = controlador;
        controlador.mostrarVista("aspirantes");
    }
}
