import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {
  wannaBuyProductList =[
    {
      title:"戴尔灵越游匣15PR-5645B",
      subtitle:"15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128G SSD + 1T GTX1050 4G独显 FHD)黑",
      price:"5999.00",
      count:"1",
    },
    {
      title:"戴尔灵越游匣15PR-5645B",
      subtitle:"15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128G SSD + 1T GTX1050 4G独显 FHD)黑",
      price:"5999.00",
      count:"1",
    },
    {
      title:"戴尔灵越游匣15PR-5645B",
      subtitle:"15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128G SSD + 1T GTX1050 4G独显 FHD)黑",
      price:"5999.00",
      count:"1",
    },
    {
      title:"戴尔灵越游匣15PR-5645B",
      subtitle:"15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128G SSD + 1T GTX1050 4G独显 FHD)黑",
      price:"5999.00",
      count:"1",
    },   
  ]

  constructor(private nav:NavController) { }

  ngOnInit() {}

  doBack(){
    this.nav.back()
  }
}
