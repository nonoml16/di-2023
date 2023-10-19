import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombre = "";
  apellidos = "";
  nif = "";
  email = "";
  tlfno = "";
  sexo = "";
  conocerPag = "";
  pswd = "";
  conPswd = "";

  getForm(){
    console.log(
      "nombre: " + this.nombre + ", apellidos: " + this.apellidos + ", NIF: " + this.nif + ", email: " 
        + this.email + ", Telefono: " + this.tlfno + ", sexo: " + this.sexo
    )
  }

  validarFormulario(){
    if(this.nombre == "" || this.apellidos == "" || this.nif == "" || this.email == "" || this.tlfno == "" || 
          this.sexo == "" || this.conocerPag == "" || this.pswd == "" || this.conPswd == "")
          console.log("Rellena todos los campos")
      else{
        if(this.pswd != this.conPswd)
          console.log("Las contraseñas no coinciden")
        else
          this.getForm();
      }
  }
}
