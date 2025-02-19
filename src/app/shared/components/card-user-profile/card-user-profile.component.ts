import { Component, Input } from '@angular/core';
import { User } from '../card-user-list/card-user-list.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card-user-profile',
  imports: [ButtonComponent],
  templateUrl: './card-user-profile.component.html',
  styleUrl: './card-user-profile.component.scss'
})
export class CardUserProfileComponent {
  @Input({ required: true }) user!: User;
}
