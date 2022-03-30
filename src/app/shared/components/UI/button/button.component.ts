import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnClass: string;
  @Input() imgClass: string;
  @Input() label: string;
  @Input() image: string;
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickBtn() {
    if (this.disabled) {
      return;
    }
    this.onClick.emit();
  }
}
