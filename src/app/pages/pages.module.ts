import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
