import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {
  nombre = "";
  apellidos = "";
  edad = 0;
  resultado = false;
  mensaje = "";
  datos = new Array

  Situacion(){
    if(this.edad>=18){
      this.resultado = true;
      this.mensaje = "Mayor de edad"
    }else{
      this.resultado = false;
      this.mensaje = "Menor de edad"
    }
  }
  
  Agregar(){
    this.datos.push({'Nombre': this.nombre, 'Apellido': this.apellidos,'Edad': this.edad,'Mensaje': this.mensaje })
  }
}
