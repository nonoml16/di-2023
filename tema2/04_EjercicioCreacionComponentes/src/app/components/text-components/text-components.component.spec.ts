import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponentsComponent } from './text-components.component';

describe('TextComponentsComponent', () => {
  let component: TextComponentsComponent;
  let fixture: ComponentFixture<TextComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextComponentsComponent]
    });
    fixture = TestBed.createComponent(TextComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
