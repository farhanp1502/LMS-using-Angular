import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleavelistComponent } from './addleavelist.component';

describe('AddleavelistComponent', () => {
  let component: AddleavelistComponent;
  let fixture: ComponentFixture<AddleavelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddleavelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddleavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
