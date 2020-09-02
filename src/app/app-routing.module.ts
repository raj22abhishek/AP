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
import { CareerComponent } from './Component/career/career.component';
import { CertificateComponent } from './Component/certificate/certificate.component';
import { AntibacterialComponent } from './Component/products/antibacterial/antibacterial.component';
import { AnalgesicComponent } from './Component/products/analgesic/analgesic.component';
import { AntiemeticComponent } from './Component/products/antiemetic/antiemetic.component';
import { AntiviralComponent } from './Component/products/antiviral/antiviral.component';
import { DiabetesComponent } from './Component/products/diabetes/diabetes.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"enquiry",component:ContactComponent},
  {path:"contact",component:AboutusComponent},
  {path:"export",component:ExportComponent},
  {path:"product",component:ProductsComponent},
  {path:"aboutus",component:AboutusmainComponent},
  {path:"antibiotics",component:AntibioticsComponent},
  {path:"antihistamine",component:AntihistamineComponent},
  {path:"antifungal",component:AntifungalComponent},
  {path:"antimalarial",component:AntimalarialComponent},
  {path:"diabetes",component:DiabetesComponent},
  {path:"antiviral",component:AntiviralComponent},
  {path:"antiemetic",component:AntiemeticComponent},
  {path:"analgesic",component:AnalgesicComponent},
  {path:"antibacterial",component:AntibacterialComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"career",component:CareerComponent},
  {path:"iron-calcium",component:IroncalciumComponent},
  {path:"multi-vitamins",component:MultivitaminsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
