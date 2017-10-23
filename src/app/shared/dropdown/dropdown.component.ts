import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DropdownValue } from './dropdown.value';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'gm-dropdown',
  templateUrl: 'dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
