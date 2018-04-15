import {Component, Input, OnInit, Output, EventEmitter, NgModule} from '@angular/core';
import {ElementProperties} from "../types/element-properties.types";
import 'rxjs/add/operator/debounceTime';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';

import { TAGS } from '../types/element-properties.types';


@Component({
  selector: 'ca-properties-panel',
  template: `
    <div class="properties">
     <!-- <input
        type="text"
        #inputTitle
        [value]="properties.title"
        (input)="changed({title: inputTitle.value})"
      />-->
      <ca-field [label]="'Title'">
        <input
          type="text"
          #inputTitle
          [value]="properties.title"
          (keydown.enter)="changeProperties.emit({title: inputTitle.value})"
          (blur)="changeProperties.emit({title: inputTitle.value})"
        />
      </ca-field>
    
      <ca-field [label]="'Color'">
        <input
          #inputColor
          type="color"
          [value]="properties.color"
          (change)="changeProperties.emit({color: inputColor.value})"
        />
      </ca-field>
      
      <ca-field [label]="'Opacity'">
        <input type="range" min="0" max="1" step="0.1"
               [value]="properties.opacity"
               #opacityInput
               (change)="changeProperties.emit({opacity: opacityInput.value})"
        >
      </ca-field>
     
      <ca-field [label]="'Tag'">
        <select
          #tagInput
          [value]="properties.tag"
          (change)="changeProperties.emit({tag: tagInput.value})"
        >
          <option *ngFor="let tag of tags | sort:'DESC'" [value]="tag">{{tag | uppercase}}</option>
        </select>
        
      </ca-field>
    
      
     
    </div>
    <button (click)="resetProperties.emit()">reset</button>

    <div class="time"> {{someDate | timeAgo }}</div>
  `,
  styles: [
    `:host {
    border-left: 1px solid grey;
    padding: 10px
    }`,
      `input {
      width: 350px
    }`,
      `.properties {
      display: flex;
      flex-direction: column;
    }`,
  `.time {
      padding: 2px;
      font-size: 22px;
    }`]
})


export class PropertiesPanelComponent
  implements OnInit{
  tags = TAGS;
  someDate: Date = new Date(2018, 2, 15, 16, 29, 0, 0);


  @Input() properties: ElementProperties;
  @Output() changeProperties = new EventEmitter<ElementProperties>();
  @Output() resetProperties = new EventEmitter();
  settingsChanged: Subject<ElementProperties> = new Subject<ElementProperties>();
  changed(settings: ElementProperties) {
    this.settingsChanged.next(settings);
  }

  constructor(){
    this.settingsChanged
      .debounceTime(300) // wait 300ms after the last event before emitting last event
      .distinctUntilChanged() // only emit if value is different from previous value
      .subscribe(settings => this.changeProperties.emit(settings));
  }

  ngOnInit(){}
}


