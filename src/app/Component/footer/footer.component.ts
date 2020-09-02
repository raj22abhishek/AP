import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeveloperNameComponent } from '../developer-name/developer-name.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  contact(){
    this.router.navigate(['/contact']);
    window.scrollTo(0,0);
  }
  export(){
    this.router.navigate(['/export'])
    window.scrollTo(0,0);
  }
  about(){
    this.router.navigate(['/aboutus'])
    window.scrollTo(0,0);
  }
  product(){
    this.router.navigate(['/product'])
    window.scrollTo(0,0);
  }
  antibiotics(){
    this.router.navigate(['/antibiotics'])
    window.scrollTo(0,0);
  }
  antihistamine(){
    this.router.navigate(['/antihistamine'])
    window.scrollTo(0,0);
  }
  antifungal(){
    this.router.navigate(['/antifungal'])
    window.scrollTo(0,0);
  }
  antimalarial(){
    this.router.navigate(['/antimalarial'])
    window.scrollTo(0,0);
  }
  ironCal(){
    this.router.navigate(['/iron-calcium'])
    window.scrollTo(0,0);
  }
  multiVit(){
    this.router.navigate(['/multi-vitamins'])
    window.scrollTo(0,0);
  }
  certificate(){
    this.router.navigate(['/certificate'])
    window.scrollTo(0,0);
  }
  career(){
    this.router.navigate(['/career'])
    window.scrollTo(0,0);
  }
  antibacterial(){
    this.router.navigate(['/antibacterial'])
    window.scrollTo(0,0);
  }
  analgesic (){
    this.router.navigate(['/analgesic'])
    window.scrollTo(0,0);
  }
  antiemetic(){
    this.router.navigate(['/antiemetic'])
    window.scrollTo(0,0);
  }
  antiviral(){
    this.router.navigate(['/antiviral'])
    window.scrollTo(0,0);
  }
  diabetes(){
    this.router.navigate(['/diabetes'])
    window.scrollTo(0,0);
  }

  dev(){
    const dialogRef = this.dialog.open(DeveloperNameComponent,{
      data: {
        Array: ""
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
