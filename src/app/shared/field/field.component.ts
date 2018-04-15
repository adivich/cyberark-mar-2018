import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ca-field',
  template: `
    <div class="field">
      <label>{{ label }}</label>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`.field { display: flex; margin-bottom: 20px }`, `label { flex-basis: 100px; flex-grow: 0}`]
})
export class FieldComponent implements OnInit {
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
