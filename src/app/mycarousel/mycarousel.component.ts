import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Swiper } from 'swiper';

@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.scss'],
})
export class MycarouselComponent  implements OnInit {
  @ViewChild('swiper',{static:true})
  swiperRef: ElementRef | undefined;

  swiper?: Swiper;


  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];

  


  ngOnInit(){
  }
  constructor() {}

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;   
    this.swiperRef?.nativeElement.swiper.autoplay.start() 
  }
 
  goNext() {
    this.swiper?.slideNext();
  }
 
  goPrev() {
    this.swiper?.slidePrev();
  }
}
