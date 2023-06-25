import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../services/url/url.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  productDetails = 
    {
      category:"游戏本",
      pic:"https://img10.360buyimg.com/n1/s450x450_jfs/t1/150665/24/28541/75214/63805b3bE00e912c4/67889ca8f9d954cc.jpg.avif",
      cpu:"Intel i7标准电压版",
      details:"<div><div class=\"img\"><img src=\"/photo-1488229297570-58520851e868\" width=\"400\" height=\"400\"></div><div><img src=\"/photo-1461749280684-dccba630e2f6\" width=\"400\" height=\"400\"></div><div><img src=\"/photo-1498050108023-c5249f4df085\" width=\"400\" height=\"400\"></div><div><img src=\"/photo-1580927752452-89d86da3fa0a\" width=\"400\" height=\"400\"></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam vero animi corporis atque accusantium quis. Eum, consequatur minima? Facilis natus iusto officia provident ipsam in, maiores praesentium culpa fuga?</p></div>",
      disk:"128G + 1T",
      family_id:"7",
      is_onsale:"0",
      lid:"27",
      lname:"戴尔灵越游匣15PR-5645B",
      memory:"8G",
      OS:"Windows 10",
      price:"5999.00",
      promise:"*退货补运费 *30天无忧退货",
      graphics:"GTX1050",
      graphicsmem:"4G",
      resolution:"全高清屏(1920*1080)",
      shelf_time:"3年",
      market_time:"150123456789",
      sold_count:"2110",
      spec:"宗师 i5 ",
      title:"戴尔灵越游匣15PR-5645B 15.6英寸游戏笔记本电脑(i5-7300HQ 8G 128G SSD + 1T GTX1050 4G独显 FHD)黑",
      subtitle:"[白条6期免息 游匣 '10'力出击] 七代四核CPU GTX1050 4G独显 FHD全高清屏,热血出击!",
    }

  constructor(private route:ActivatedRoute,
              private http:HttpClient,
              private url:UrlService) { }

  ngOnInit() {
    this.route.params.subscribe((data:any)=>{
      console.log("路由参数:")
      console.log(data)
      let pid = data.pid
      this.http.get(this.url.host + this.url.productDetailApi + pid).subscribe((res:any)=>{
        console.log("获得了商品的详情数据:")
        console.log(res)
        this.productDetails = res.details
        console.log(this.productDetails)
      })
    })
  }

}
