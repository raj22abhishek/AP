import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MainServiceService } from 'src/app/Service/mainService.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductList } from 'src/app/data/data';

@Component({
  selector: 'app-multivitamins',
  templateUrl: './multivitamins.component.html',
  styleUrls: ['./multivitamins.component.css']
})
export class MultivitaminsComponent implements OnInit {
  dispArr:any;
  constructor(private service:MainServiceService,public dialog: MatDialog,private prodList:ProductList) { }

  ngOnInit(): void {
    this.dispArr = this.prodList.data;
    console.log(this.prodList.data)
  }
  openDialog(data) {
    const dialogRef = this.dialog.open(PopupComponent,{
      data: {
        Array: data
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}