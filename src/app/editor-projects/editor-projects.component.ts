import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Project} from "../types/element-properties.types";

@Component({
  selector: 'ca-editor-projects',
  template: `
    <ca-field [label]="'Projects:'">
      <select
        #projectInput
        [value]="selectedProject"
        (change)="projectSelected.emit({id: projectInput.value})"
      >
        <option *ngFor="let project of projects | sort:'DESC'" [value]="project.id">{{project.id}}</option>

      </select>

    </ca-field>
  `,
  styles: [
    `select {
      width: 50px;
    }`
  ]
})
export class EditorProjectsComponent implements OnInit {
  @Input() projects: Project[];
  @Output() projectSelected = new EventEmitter<Project>();

  selectedProject: Project = null;
  constructor() { }

  ngOnInit() {
  }

}
