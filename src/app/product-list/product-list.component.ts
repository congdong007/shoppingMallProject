import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UrlService } from '../services/url/url.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  implements OnInit {
  private pno = 0 // 即将加载数据的页号
  productList = [
    {
      is_onsale:"1",
      lid:"1",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },
    {
      is_onsale:"1",
      lid:"12",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },
    {
      is_onsale:"1",
      lid:"13",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },
    {
      is_onsale:"1",
      lid:"14",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },
    {
      is_onsale:"1",
      lid:"15",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },   
    {
      is_onsale:"1",
      lid:"18",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },    
    {
      is_onsale:"1",
      lid:"17",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },    
    {
      is_onsale:"1",
      lid:"16",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },   
     {
      is_onsale:"1",
      lid:"19",
      pic:"../assets/products/11.jpg",
      price:"$3488.00",
      sold_count:"126",
      title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
    },      
  ]

  productList2 = [
    {
    is_onsale:"1",
    lid:"1",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },
  {
    is_onsale:"1",
    lid:"12",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },
  {
    is_onsale:"1",
    lid:"13",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },
  {
    is_onsale:"1",
    lid:"14",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },
  {
    is_onsale:"1",
    lid:"15",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },   
  {
    is_onsale:"1",
    lid:"18",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },    
  {
    is_onsale:"1",
    lid:"17",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },    
  {
    is_onsale:"1",
    lid:"16",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  },   
   {
    is_onsale:"1",
    lid:"19",
    pic:"../assets/products/11.jpg",
    price:"$3488.00",
    sold_count:"126",
    title:"酷睿双核i5处理器|512SSD|8G内存|INTEL 2G 显卡|18寸显示器"
  }, 
  ]

  constructor( private nav:NavController , private http:HttpClient , private url:UrlService ) { }
  hasMore:Boolean = true
  @ViewChild('myInfiniteScroll',{static:false})
  myInfiniteScroll:any

  //组件初始化完成,第一次加载商品数据
  ngOnInit() {
    this.loadData()
  }

  doBack(){
    this.nav.back()
  }

  loadData(){
    this.pno ++

    /*
    this.http.get(this.url.productListApi+this.pno).subscribe((res:any)=>{
      //console.log("获得了商品列表数据")
      //console.log(res)
      //拼接数组
      this.productList = this.productList.concat(res.data)
      this.myInfiniteScroll.complete()
    })*/
    setTimeout(() => {
      if(this.pno >= 3){
        this.hasMore = false
      } 

      this.productList = this.productList.concat(this.productList2)
      this.myInfiniteScroll.complete()
    }, 3000);
  }

}
