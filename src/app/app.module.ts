import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCamionComponent } from './update-camion/update-camion.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheparnomComponent } from './rechercheparnom/rechercheparnom.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ListeMarquesComponent } from './services/liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CamionsComponent,
    AddCamionComponent,
    UpdateCamionComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParMarqueComponent,
    SearchFilterPipe,
    RechercheparnomComponent,
    ListeMarquesComponent,
    UpdateMarqueComponent,
    RegisterComponent,
    VerifEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
