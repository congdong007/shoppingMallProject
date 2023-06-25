import { Pipe, PipeTransform } from '@angular/core';
import { UrlService } from 'src/app/services/url/url.service';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  constructor(private url:UrlService){}

  transform(val:any) {
    if(val)
    {
      //正则表达式匹配
      return val.replace(/src="\//g,'src="' + this.url.replaceHost + '/' ) ;
    }
  }

}
