import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card-content',
  imports: [ButtonComponent],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent {
  @Input({ required: true }) title!:string;
  @Input({ required: true }) description!:string;
  @Input({ required: true }) headerBackground!:string;
}
