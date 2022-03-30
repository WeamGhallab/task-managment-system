import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Output() onChecked = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  onCheckedInput(event) {
    this.onChecked.emit(event.target.checked);
  }
}
