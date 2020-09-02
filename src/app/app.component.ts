import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CollapseCompComponent } from './Component/collapse-comp/collapse-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AmarPharma';
  animationState = 'out';
  abc:boolean = true;
  constructor(private router:Router,public dialog: MatDialog){}

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
  about(){
    this.router.navigate(['/aboutus'])
  }
  export(){
    this.router.navigate(['/export'])
  }
  contact(){
    this.router.navigate(['/contact'])
  }
  antibacterial(){
    this.router.navigate(['/antibacterial'])
  }
  analgesic (){
    this.router.navigate(['/analgesic'])
  }
  antiemetic(){
    this.router.navigate(['/antiemetic'])
  }
  antiviral(){
    this.router.navigate(['/antiviral'])
  }
  diabetes(){
    this.router.navigate(['/diabetes'])
  }
  certificate(){
    this.router.navigate(['/certificate'])
  }
  career(){
    this.router.navigate(['/career'])
  }
  home(){
    this.router.navigate(['/'])
  }
  open(){
    const dialogRef = this.dialog.open(CollapseCompComponent,{
      data: {
        Array: "data"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
