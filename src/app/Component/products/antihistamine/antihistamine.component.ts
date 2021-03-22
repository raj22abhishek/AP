import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Service/mainService.service';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductList } from 'src/app/data/data';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-antihistamine',
  templateUrl: './antihistamine.component.html',
  styleUrls: ['./antihistamine.component.css']
})
export class AntihistamineComponent implements OnInit {
  dispArr:any;
  constructor(private service:MainServiceService,public dialog: MatDialog,private prodList:ProductList) { }

  ngOnInit(): void {
    this.dispArr = this.prodList.Antihistamine;
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
