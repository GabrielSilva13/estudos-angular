import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventService } from '../../../shared/services/EventServices';
import { WishItem } from '../../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
  imports: [CommonModule],
  providers: [FormsModule]
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  constructor(private events: EventService) {}

  get cssClasses() {
    return { 'text-muted strikeout': this.wish.isComplete };
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
