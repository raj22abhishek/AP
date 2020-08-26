import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-collapse-comp',
  templateUrl: './collapse-comp.component.html',
  styleUrls: ['./collapse-comp.component.css']
})
export class CollapseCompComponent implements OnInit {

  constructor(private router:Router,public dialogRef: MatDialogRef<CollapseCompComponent>) { }

  ngOnInit(): void {
  }
  openAntiBiotics(){
    this.router.navigate(['/antibiotics'])
    this.dialogRef.close()
  }
  openAntihistamine(){
    this.router.navigate(['/antihistamine'])
    this.dialogRef.close()
  }
  openAntifungal(){
    this.router.navigate(['/antifungal'])
    this.dialogRef.close()
  }
  openAntimalarial(){
    this.router.navigate(['/antimalarial'])
    this.dialogRef.close()
  }
  openIronValcium(){
    this.router.navigate(['/iron-calcium'])
    this.dialogRef.close()
  }
  openMultiVitamins(){
    this.router.navigate(['/multi-vitamins'])
    this.dialogRef.close()
  }
  openExportTab(){
    this.router.navigate(['/product'])
    this.dialogRef.close()
  }
  about(){
    this.router.navigate(['/aboutus'])
    this.dialogRef.close()
  }
  export(){
    this.router.navigate(['/export'])
    this.dialogRef.close()
  }
  contact(){
    this.router.navigate(['/contact'])
    this.dialogRef.close()
  }
  home(){
    this.router.navigate(['/'])
    this.dialogRef.close()
  }

}
