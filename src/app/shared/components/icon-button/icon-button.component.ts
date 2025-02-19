import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() iconSrc: string = '';
  @Input() altText: string = 'icon';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
}
