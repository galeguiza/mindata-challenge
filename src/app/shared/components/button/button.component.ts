import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'accent' | 'link' | 'icon' = 'primary';
  @Input() shape: 'rounded' | 'square' = 'square';
  @Input() size: 'large' | 'medium' | 'small' = 'small';
}
