import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  //server host url
  public host = 'http://www.codeboy.com/'

  public replaceHost = 'https://images.unsplash.com'
  // first page data url
  public indexApi = this.host + 'data/product/index.php'
  // product list data url
  public productListApi = this.host + 'data/product/index.php'
  // product details data url
  public productDetailApi = this.host + 'data/product/list.php?pno='
  // user login url
  public loginApi = this.host + 'data/user/login.php'
  // user register url
  public registerApi = this.host + 'data/user/register.php'

  constructor() { }
}
