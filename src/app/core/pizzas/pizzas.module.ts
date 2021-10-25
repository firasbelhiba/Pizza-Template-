import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizzas.component';

import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PizzasComponent],
  imports: [CommonModule, SliderModule, ReactiveFormsModule, FormsModule],
})
export class PizzasModule {}
