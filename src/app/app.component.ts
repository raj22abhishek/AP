import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmarPharma';
  constructor(private router:Router){}

  redirectTo(){
    this.router.navigate(['/enquiry'])
  }
  openAntiBiotics(){
    this.router.navigate(['/antibiotics'])
  }
  openAntihistamine(){
    this.router.navigate(['/antihistamine'])
  }
  openAntifungal(){
    this.router.navigate(['/antifungal'])
  }
  openAntimalarial(){
    this.router.navigate(['/antimalarial'])
  }
  openIronValcium(){
    this.router.navigate(['/iron-calcium'])
  }
  openMultiVitamins(){
    this.router.navigate(['/multi-vitamins'])
  }
  openExportTab(){
    this.router.navigate(['/product'])
  }
}
