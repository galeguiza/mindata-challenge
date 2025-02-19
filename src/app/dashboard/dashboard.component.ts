import { Component } from '@angular/core';
import { CardContentComponent } from '../shared/components/card-content/card-content.component';
import { CardUserListComponent, User } from '../shared/components/card-user-list/card-user-list.component';
import { CardUserProfileComponent } from '../shared/components/card-user-profile/card-user-profile.component';
import { CardProductComponent, Product } from '../shared/components/card-product/card-product.component';
import { USER_MOCK } from '../shared/mocks/userMock';
import { PRODUCT_MOCK } from '../shared/mocks/productMock';

@Component({
  selector: 'app-dashboard',
  imports: [CardUserListComponent, CardUserProfileComponent, CardProductComponent, CardContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public users: User[] = USER_MOCK;
  public product: Product = PRODUCT_MOCK;
}
