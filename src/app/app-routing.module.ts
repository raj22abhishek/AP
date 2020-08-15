import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ExportComponent } from './Component/export/export.component';
import { ProductsComponent } from './Component/products/products.component';
import { ExportProductsComponent } from './Component/export-products/export-products.component';
import { AboutusmainComponent } from './Component/aboutusmain/aboutusmain.component';
import { AntibioticsComponent } from './Component/products/antibiotics/antibiotics.component';
import { AntihistamineComponent } from './Component/products/antihistamine/antihistamine.component';
import { AntifungalComponent } from './Component/products/antifungal/antifungal.component';
import { AntimalarialComponent } from './Component/products/antimalarial/antimalarial.component';
import { IroncalciumComponent } from './Component/products/ironcalcium/ironcalcium.component';
import { MultivitaminsComponent } from './Component/products/multivitamins/multivitamins.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"enquiry",component:ContactComponent},
  {path:"contact",component:AboutusComponent},
  {path:"export",component:ExportComponent},
  {path:"product",component:ProductsComponent},
  {path:"aboutus",component:AboutusmainComponent},
  {path:"antibiotics",component:AntibioticsComponent},
  {path:"antihistamine",component:AntihistamineComponent},
  {path:"antifungal",component:AntifungalComponent},
  {path:"antimalarial",component:AntimalarialComponent},
  {path:"iron-calcium",component:IroncalciumComponent},
  {path:"multi-vitamins",component:MultivitaminsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
