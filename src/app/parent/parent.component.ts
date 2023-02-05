import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  productSelected: boolean= false;
  product: string =''
  addedToCart:any;

  btnClicked(product: string): void {
    this.productSelected = true;
    this.product = product;
  }

  add() : void {
    
    this.addedToCart  = this.product;
  }
}
