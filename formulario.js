const $formulario = document.getElementById('formulario');//$ se utiliza para buscar o rescatar el formulario
const $inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario : /^[A-Za-z0-9\_ \-]{4,16}$/, //*tiene que haceptar las letras minuscula*/
    nombre : /^[a-zA-Z\s]{1,40}$/,
    password : /^.{4,12}$/, //minimo 4 y max 12
    correo : /^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/,
    telefone : /^\d{7,14}$/ //minimo 7 max 14 
}

const campos = {
    usuario : false,
    nombre : false,
    password : false,
    correo : false,
    telefone : false,
}

const vlidarFormulario = (e) => {
   switch (e.target.name) {
      case 'usuario':
        validarCampo(expresiones.usuario, e.target, 'usuario')//todavia no la hhe creado
        break;

      default:
        break;  
   }
}

const validarCampo = ( expresiones, input, campos) =>{
    if(expresiones.test(input.value)) {
       document.getElementById(`grupo_${campos}`).classList.remove('formulario_group_incorrecto');
       document.getElementById(`grupo_${campos}`).classList.add('formulario_group_correcto');
       document.getElementById(`grupo_${campos}i`).classList.add('formulario_group_correcto');
    }
    else {

    }

}

