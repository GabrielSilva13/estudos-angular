import { Component, OnInit } from '@angular/core';

import { WishItem } from './../../shared/models/wishItem';

import { EventService } from '../../shared/services/EventServices';
import { WishService } from './wish.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { AddComponentFormComponent } from './add-component-form/add-component-form.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    WishListComponent,
    WishListItemComponent,
    WishFilterComponent,
    AddComponentFormComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent implements OnInit {
  items: WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filter: any;
}
