import Cl_controlador from "./Cl_controlador.js";
import Cl_mConcurso from "./Cl_mConcurso.js";
import Cl_vConcurso from "./Cl_vConcurso.js";
import Cl_vAspirante from "./Cl_vAspirante.js";

export default class Cl_index {
  constructor() {
    let modelo = new Cl_mConcurso();
    let vConcurso = new Cl_vConcurso();
    let vAspirante = new Cl_vAspirante();
    
    let controlador = new Cl_controlador(modelo, vConcurso, vAspirante);
    
    vConcurso.controlador = controlador;
    vAspirante.controlador = controlador;
    controlador.mostrarVista("lista");
  }
}