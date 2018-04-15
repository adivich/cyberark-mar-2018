import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorActionsComponent } from './editor-actions.component';

describe('EditorActionsComponent', () => {
  let component: EditorActionsComponent;
  let fixture: ComponentFixture<EditorActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
