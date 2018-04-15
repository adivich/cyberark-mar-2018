import { Component, OnInit } from '@angular/core';
import {EditorService} from "../editor.service";
import {ActivatedRoute, Router} from "@angular/router";
import { NgRedux } from '@angular-redux/store';
import {reset} from '../store/actions/editor.actions'

@Component({
  selector: 'ca-editor',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class='container'>
      <ca-elements-navigator></ca-elements-navigator>
      <ca-working-area></ca-working-area>
      <ca-properties-panel *ngIf="editor.selectedElementIndex !== null"
                           [properties]="editor.elements[editor.selectedElementIndex]"
                           (changeProperties)="editor.setProperties($event)"
                           (resetProperties)="editor.resetProps()"
      ></ca-properties-panel>


      <br>
    </div>
  `,
  styles: [
    `.container { display: flex; height: 100% }`
  ]
})
export class EditorComponent implements OnInit{

  constructor(public store: NgRedux<any>, public editor: EditorService, private activatedRoute: ActivatedRoute){

  }
  ngOnInit(){
    this.editor.loadAllProjects();
    this.activatedRoute.params.subscribe((params) => {
      if (params.id){
        this.editor.loadProject(params.id);
      } else {
        this.store.dispatch(reset());
      }
    })
  }




}
