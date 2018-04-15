import { Component, OnInit } from '@angular/core';
import {EditorService} from "../editor.service";
import {Router} from "@angular/router";
import { NgRedux, select } from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import { ElementProperties } from '../types/element-properties.types';
import {setSelectedIndex} from '../store/actions/editor.actions';

@Component({
  selector: 'ca-working-area',
  template: `
    <ca-editor-actions></ca-editor-actions>
    <div class="working-area" (caClickAndStop)="selectElement(null)" caScrollDetect [caScrollClass]="'scrolled'">
      <ca-editor-projects [projects]="editor.projects" (projectSelected)="loadProject($event)"></ca-editor-projects>
      <div class="element"
           *ngFor="let properties of (elements$ | async); let i= index"
           [class.element-selected]="(selectedIndex$ | async)  === i"
           (caClickAndStop)="selectElement(i)"
           [style.color]="properties.color"
           [style.opacity]="properties.opacity">
        <ng-container [ngSwitch]="properties.tag">
          <h1 *ngSwitchCase="'h1'">
            {{properties.title}}
          </h1>
          <h2 *ngSwitchCase="'h2'">
            {{properties.title}}
          </h2>
          <p *ngSwitchCase="'p'">
            {{properties.title}}
          </p> 
          <div *ngSwitchCase="'div'">
            {{properties.title}}
          </div>
        </ng-container>
      </div>

    </div>

  `,
  styles: [`:host { flex-grow: 1; padding: 5px; position: relative }`,
      `.working-area { height: 100% }`,
      `.element { cursor: pointer }`,
      `.element-selected { box-shadow: inset 0 0 1px 1px rgba(0,0,0,0.5) }`]
})
export class WorkingAreaComponent implements OnInit {
  @select(['editor', 'elements']) elements$: Observable<ElementProperties[]>;
  @select(['editor', 'selectedIndex']) selectedIndex$: Observable<number>

  constructor(public store: NgRedux<any>, private router: Router, public editor: EditorService) { }

  ngOnInit() {
  }

  loadProject(project){
    this.router.navigate(['/editor', project.id]);
  }
  selectElement(i){
    this.store.dispatch(setSelectedIndex(i));
   // this.editor.selectedElementIndex = i;
  }
}
