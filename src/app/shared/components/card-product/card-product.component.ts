import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';

export type Product = {
  name: string;
  productImg: string;
  description: string;
  price: number;
  oldPrice?: number;
}

@Component({
  selector: 'app-card-product',
  imports: [CommonModule, ButtonComponent, IconButtonComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input({required: true}) product!: Product;
}
