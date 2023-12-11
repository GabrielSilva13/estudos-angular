import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'add-component-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './add-component-form.component.html',
  styleUrl: './add-component-form.component.css'
})
export class AddComponentFormComponent {
  @Output() addWish = new EventEmitter<WishItem>()

  newWishText: string = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = '';
  }
}
