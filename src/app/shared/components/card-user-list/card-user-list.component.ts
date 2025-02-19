import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

export type User = {
  fullname: string;
  avatar: string;
  activity: string
}

@Component({
  selector: 'app-card-user-list',
  imports: [ButtonComponent],
  templateUrl: './card-user-list.component.html',
  styleUrl: './card-user-list.component.scss'
})
export class CardUserListComponent {
  @Input() title!:string;
  @Input() description!:string;
  @Input() users: User[] = [];
  @Input() totalUsers!:number;
}
