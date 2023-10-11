import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditholidaysComponent } from './editholidays.component';

describe('EditholidaysComponent', () => {
  let component: EditholidaysComponent;
  let fixture: ComponentFixture<EditholidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditholidaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
