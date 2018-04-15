import { Injectable } from '@angular/core';
import {ElementProperties, Project} from "./types/element-properties.types";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EditorService {
  defaultElementsProperties: ElementProperties[] = [
    {
      title : "Cyberark Angular Course",
      color: "#fa2b89",
      opacity: 0.8,
      tag: "h1"
    },
    {
      title : "Angular io rules",
      color: "#4dfa7f",
      opacity: 1,
      tag: "h2"
    }
  ];
  selectedElementIndex = null;
  elements: ElementProperties[] = this.defaultElementsProperties.map(x => Object.assign({}, x));
  projects: Project[] = [];

  setProperties(newProps) {
    this.elements[this.selectedElementIndex] = {
      ...this.elements[this.selectedElementIndex],
      ...newProps
    };
  }

  resetProps() {
    this.elements[this.selectedElementIndex] = Object.assign( this.defaultElementsProperties[this.selectedElementIndex]);
  }
  addElement(tag){
    this.elements = [
      ...this.elements,
      {
        tag: tag,
        title: 'New Element',
        color: '#000000',
        opacity: 1
      }
    ];
    this.selectedElementIndex = this.elements.length - 1;

  }

  save(){
    return this.httpClient.post<Project>('http://localhost:3000/projects', {
      elements: this.elements
    })
  }

  update(id){
    return this.httpClient.put<Project>(`http://localhost:3000/projects/${id}`, {
      elements: this.elements
    })
  }

  loadProject(id){
    return this.httpClient.get<Project>(`http://localhost:3000/projects/${id}`)
      .subscribe((data) => this.elements = data.elements);
  }
  loadAllProjects(){
    return this.httpClient.get<Project[]>(`http://localhost:3000/projects/`)
      .subscribe((data) => this.projects = data);

  }
  reset(){
    this.elements = this.defaultElementsProperties.map(x => Object.assign({}, x));

    this.selectedElementIndex = null;
  }
  constructor(private httpClient: HttpClient) {
  }

}
