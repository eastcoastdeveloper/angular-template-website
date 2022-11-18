import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  dropDownMenu: UntypedFormGroup;
  menuValue: any;
  cities = [
    { index: 0, name: 'Newport Beach' },
    { index: 1, name: 'Huntington Beach' },
  ];

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.dropDownMenu = this.formBuilder.group({
      city: [null],
    });
  }

  selectValue() {
    this.menuValue = this.dropDownMenu.value.env;
  }
}
