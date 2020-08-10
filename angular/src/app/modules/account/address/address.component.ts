import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../../data/address.model';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address: Address;

  constructor() {}

  ngOnInit(): void {}
}