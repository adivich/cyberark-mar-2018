import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsNavigatorComponent } from './elements-navigator.component';

describe('ElementsNavigatorComponent', () => {
  let component: ElementsNavigatorComponent;
  let fixture: ComponentFixture<ElementsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
