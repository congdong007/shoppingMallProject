import { Component, OnInit } from '@angular/core';

import { UrlService } from '../services/url/url.service';
import { HttpClient } from '@angular/common/http';
import { Swiper } from 'swiper';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent  implements OnInit {
  url:any
  carouseItems =[]
  newArrivalItems =[]
  recommandedItems =[
    {
      pid:"1",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"2",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"3",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"4",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"1",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"2",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"3",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"4",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"1",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"2",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"3",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
    {
      pid:"4",
      pic:"../assets/products/11.jpg",
      details:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器",
      price:"$3488.00",
      title:"小米Air金属超轻薄",
      href:"product_details.html?lid=5"
    },
  ]
  topSaleItems =[]

  constructor( private serviceurl:UrlService ,private http:HttpClient) {
    this.url = serviceurl 
   }

  ngOnInit() {
    // this.http.get(this.url.indexApi).subscribe((res:any)=>{
    //    this.carouseItems = res.carouseItems;
    //    this.newArrivalItems = res.newArrivalItems;
    //    this.recommandedItems = res.recommandedItems;
    //    this.topSaleItems = res.topSaleItems;
    // })
  }

}
