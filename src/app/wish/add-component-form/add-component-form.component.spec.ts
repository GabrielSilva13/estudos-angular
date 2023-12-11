import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponentFormComponent } from './add-component-form.component';

describe('AddComponentFormComponent', () => {
  let component: AddComponentFormComponent;
  let fixture: ComponentFixture<AddComponentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponentFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
