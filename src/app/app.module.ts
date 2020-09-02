import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 

import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ExportComponent } from './Component/export/export.component';
import { ProductsComponent } from './Component/products/products.component';
import { ExportProductsComponent } from './Component/export-products/export-products.component';
import { NoopAnimationsModule,BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusmainComponent } from './Component/aboutusmain/aboutusmain.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { AntibioticsComponent } from './Component/products/antibiotics/antibiotics.component';
import { AntihistamineComponent } from './Component/products/antihistamine/antihistamine.component';
import { AntifungalComponent } from './Component/products/antifungal/antifungal.component';
import { AntimalarialComponent } from './Component/products/antimalarial/antimalarial.component';
import { IroncalciumComponent } from './Component/products/ironcalcium/ironcalcium.component';
import { MultivitaminsComponent } from './Component/products/multivitamins/multivitamins.component';
import { MainServiceService } from './Service/mainService.service';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './Component/products/popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductList } from './data/data';
import { environment } from 'src/environments/environment';
import { CollapseCompComponent } from './Component/collapse-comp/collapse-comp.component';
import { DeveloperNameComponent } from './Component/developer-name/developer-name.component';
import { CareerComponent } from './Component/career/career.component';
import { CertificateComponent } from './Component/certificate/certificate.component';
import { AntibacterialComponent } from './Component/products/antibacterial/antibacterial.component';
import { AnalgesicComponent } from './Component/products/analgesic/analgesic.component';
import { AntiemeticComponent } from './Component/products/antiemetic/antiemetic.component';
import { AntiviralComponent } from './Component/products/antiviral/antiviral.component';
import { DiabetesComponent } from './Component/products/diabetes/diabetes.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    ExportComponent,
    ProductsComponent,
    ExportProductsComponent,
    AboutusmainComponent,
    AntibioticsComponent,
    AntihistamineComponent,
    AntifungalComponent,
    AntimalarialComponent,
    IroncalciumComponent,
    MultivitaminsComponent,
    PopupComponent,
    CollapseCompComponent,
    DeveloperNameComponent,
    CareerComponent,
    CertificateComponent,
    AntibacterialComponent,
    AnalgesicComponent,
    AntiemeticComponent,
    AntiviralComponent,
    DiabetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatDialogModule,ReactiveFormsModule,
    NoopAnimationsModule,MatMenuModule,MatCardModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebase),PdfViewerModule
  ],
  providers: [ProductList],
  bootstrap: [AppComponent]
})
export class AppModule { }
