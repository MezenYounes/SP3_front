import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { UpdateCamionComponent } from './update-camion/update-camion.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { camion } from './model/camion.model';
import { camionGuard } from './camion.guard';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheparnomComponent } from './rechercheparnom/rechercheparnom.component';
import { ListeMarquesComponent } from './services/liste-marques/liste-marques.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
const routes: Routes = [
{path: "camions", component : CamionsComponent},

{ path: "", redirectTo: "camions", pathMatch: "full" },
{path: "updateCamion/:id", component : UpdateCamionComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},

{path: "add-camion", component : AddCamionComponent,canActivate:[camionGuard]},

{path: "recherche-par-marque", component : RechercheParMarqueComponent},
{path: "rechercheparnom", component : RechercheparnomComponent},
{path: "liste-marques", component : ListeMarquesComponent},
{path:'register',component:RegisterComponent},
{ path: 'verifEmail', component: VerifEmailComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
