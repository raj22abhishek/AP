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

}
