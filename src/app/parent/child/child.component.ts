import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

   @Input() product:any;
   @Input() isSelected: boolean = false;
   @Output() addedProduct = new EventEmitter<any>();

   addToCart() : void {
    this.addedProduct.emit(this.product)
   }
   
}
