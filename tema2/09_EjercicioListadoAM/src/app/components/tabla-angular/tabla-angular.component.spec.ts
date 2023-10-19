import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAngularComponent } from './tabla-angular.component';

describe('TablaAngularComponent', () => {
  let component: TablaAngularComponent;
  let fixture: ComponentFixture<TablaAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAngularComponent]
    });
    fixture = TestBed.createComponent(TablaAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
