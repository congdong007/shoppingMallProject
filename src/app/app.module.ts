import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgUrlPipe } from './pipes/imgUrl/img-url.pipe';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NzCarouselModule } from 'ng-zorro-antd/carousel';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    IndexComponent,
    MainComponent,
    NotFoundComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserLoginComponent,
    ImgUrlPipe,
    
  ],
  imports: [
    BrowserModule, //ngFor / ngIf ......
    IonicModule.forRoot(),  //ion-xxx
    AppRoutingModule,
    HttpClientModule, // httpclient
    FormsModule, BrowserAnimationsModule // ngModel
    ,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
