import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/data/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list1:any = [];
  list2:any =[];
  list:any;
  tabletList:any = []
  capList:any = []
  syrupList:any = []
  externalOinment:any = []
  externalCosmetic:any = []
  externalNasalSpray:any = []
  externalPowder:any = []
  sachetList:any = []
  foodCapTabList:any = []
  searchInp:any = ""
  isSelectedFirst:string = "#25274d";
  isSelectedSecond:string = "#ff9b00";
  isSelectedThird:string = "#ff9b00";
  isSelectedFourth:string = "#ff9b00";
  isSelectedFifit:string = "#ff9b00";
  isSelectedSixth:string = "#ff9b00";
  
  headElements = ['ID', 'First', 'Last', 'Handle'];
  constructor(private prodList:ProductList) { }

  ngOnInit(): void {
    console.log(this.prodList);
    this.list = this.prodList.exportList;
    this.tabletList = this.prodList.exportList;
    this.capList = this.prodList.capsuleList;
    this.syrupList = this.prodList.syrupList;
    this.externalOinment = this.prodList.externalOinment;
    this.externalCosmetic = this.prodList.externalCosmetic;
    this.externalNasalSpray = this.prodList.externalNasalSpray;
    this.externalPowder = this.prodList.externalPowder;
    this.sachetList = this.prodList.sachetList;
    this.foodCapTabList = this.prodList.foodCapTabList;
    this.getData(this.list)
    
  }

  getData(list){

    let y = (list.length)/2;
    let x = Math.floor(y)
    console.log(x)
    console.log(list.length)
    this.list1 = [];
    this.list2 = [];
    for(let i=0;i<x;i++){
      this.list1.push(list[i])
    }
    for(let j=x;j<list.length;j++){
      this.list2.push(list[j])
    }

    
  }

  search(event){
    console.log(this.searchInp)
    this.searchInp = this.searchInp.toUpperCase();
    var arr:any = []
    console.log(this.list.length,this.list[0]['name'])
    for(let k=0;k<this.list.length;k++){
      if(this.list[k]['name'].indexOf(this.searchInp) != -1){
        arr.push(this.list[k])
      }
    }
    console.log(arr)
    this.getData(arr)
  }

  firstTab(){
    this.isSelectedFirst = "#25274d";
    this.isSelectedSecond = "#ff9b00";
    this.isSelectedThird = "#ff9b00";
    this.isSelectedFourth = "#ff9b00";
    this.isSelectedFifit = "#ff9b00";
    this.isSelectedSixth = "#ff9b00";
    this.list = this.tabletList;
    this.getData(this.list)
    this.searchInp = ""
  }
  secondTab(){
    this.isSelectedFirst = "#ff9b00";
    this.isSelectedSecond = "#25274d";
    this.isSelectedThird = "#ff9b00";
    this.isSelectedFourth = "#ff9b00";
    this.isSelectedFifit = "#ff9b00";
    this.isSelectedSixth = "#ff9b00";
    this.list = this.capList;
    this.getData(this.list)
    this.searchInp = ""
  }
  thirdTab(){
    this.isSelectedFirst = "#ff9b00";
    this.isSelectedSecond = "#ff9b00";
    this.isSelectedThird = "#25274d";
    this.isSelectedFourth = "#ff9b00";
    this.isSelectedFifit = "#ff9b00";
    this.isSelectedSixth = "#ff9b00";
    this.list = this.syrupList;
    this.getData(this.list)
    this.searchInp = ""
  }
  forthTab(){
    this.isSelectedFirst = "#ff9b00";
    this.isSelectedSecond = "#ff9b00";
    this.isSelectedThird = "#ff9b00";
    this.isSelectedFourth = "#25274d";
    this.isSelectedFifit = "#ff9b00";
    this.isSelectedSixth = "#ff9b00";
    this.list = this.externalOinment;
    this.getData(this.list)
    this.searchInp = ""
  }
  fifthTab(){
    this.isSelectedFirst = "#ff9b00";
    this.isSelectedSecond = "#ff9b00";
    this.isSelectedThird = "#ff9b00";
    this.isSelectedFourth = "#ff9b00";
    this.isSelectedFifit = "#25274d";
    this.isSelectedSixth = "#ff9b00";
    this.list = this.sachetList;
    this.getData(this.list)
    this.searchInp = ""
  }
  sixthTab(){
    this.isSelectedFirst = "#ff9b00";
    this.isSelectedSecond = "#ff9b00";
    this.isSelectedThird = "#ff9b00";
    this.isSelectedFourth = "#ff9b00";
    this.isSelectedFifit = "#ff9b00";
    this.isSelectedSixth = "#25274d";
    this.list = this.foodCapTabList;
    this.getData(this.list)
    this.searchInp = ""
  }

}
