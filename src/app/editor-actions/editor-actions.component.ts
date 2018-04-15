import {Component, OnInit} from '@angular/core';
import {EditorService} from "../editor.service";
import {Project} from "../types/element-properties.types";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ca-editor-actions',
  template: `
    <div class="actions">
      <button (click)="save()" class="btn btn-primary">Save</button>
    </div>
  `,
  styles: [
      `.actions {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 5px;
      right: 5px;
      opacity: 0.2;
      padding: 5px;
      background: white;
      border: 1px solid black;
    }`,
      `.actions:hover {
      opacity: 0.9;
    }`]
})
export class EditorActionsComponent implements OnInit {

  constructor(public editorService: EditorService, private router: Router, private  activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  save() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.editorService.update(params.id).subscribe(data => data);
    }
    else {
      this.editorService.save()
        .subscribe((data: Project) => {
          this.router.navigate(['/editor', data.id]);
        });
    }

  }

}
