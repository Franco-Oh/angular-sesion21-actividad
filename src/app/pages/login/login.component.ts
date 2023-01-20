import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  user!:any;
  pswrd!:any

  // Para activar mensaje cuando es enviado
  mensaje = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      usuario:['', 
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  send(): any{
    console.log(this.formLogin.value);
    this.mensaje = true;
    // Tiempo de 5 segundos para borrar información
    setTimeout(()=>{
      this.mensaje = false;
      console.log("Datos ocultados");
    }, 5000)
  }
}
