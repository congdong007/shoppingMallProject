import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IndexModule { }
