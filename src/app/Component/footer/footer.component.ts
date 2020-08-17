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
    this.router.navigate(['/contact'])
  }
  export(){
    this.router.navigate(['/export'])
  }
  about(){
    this.router.navigate(['/aboutus'])
  }
  product(){
    this.router.navigate(['/product'])
  }
  antibiotics(){
    this.router.navigate(['/antibiotics'])
  }
  antihistamine(){
    this.router.navigate(['/antihistamine'])
  }
  antifungal(){
    this.router.navigate(['/antifungal'])
  }
  antimalarial(){
    this.router.navigate(['/antimalarial'])
  }
  ironCal(){
    this.router.navigate(['/iron-calcium'])
  }
  multiVit(){
    this.router.navigate(['/multi-vitamins'])
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
