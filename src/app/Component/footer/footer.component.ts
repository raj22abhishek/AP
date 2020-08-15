import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

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

}
