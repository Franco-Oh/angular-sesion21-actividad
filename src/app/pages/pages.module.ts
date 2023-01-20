import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    LoginComponent
  ]
})
export class PagesModule { }
