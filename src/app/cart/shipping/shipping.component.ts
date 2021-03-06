import {Component, OnInit} from '@angular/core';
import {CartService} from "../../serivce/cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices()

    window.alert(this.shippingCosts.mappings);
  }

}
