import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NignUpComponent } from './nign-up.component';

describe('NignUpComponent', () => {
  let component: NignUpComponent;
  let fixture: ComponentFixture<NignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
