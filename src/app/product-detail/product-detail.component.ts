
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product;

constructor(
    private route: ActivatedRoute,
  ) { }

ngOnInit() {
  // First get the product id from the current route.
  const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => {
    return product.id === Number(productIdFromRoute);
  });
}
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/