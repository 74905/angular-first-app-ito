import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() name;
  @Output() onNotify = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}