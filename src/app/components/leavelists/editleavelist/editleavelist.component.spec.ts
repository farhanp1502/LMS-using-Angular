import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleavelistComponent } from './editleavelist.component';

describe('EditleavelistComponent', () => {
  let component: EditleavelistComponent;
  let fixture: ComponentFixture<EditleavelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditleavelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditleavelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
