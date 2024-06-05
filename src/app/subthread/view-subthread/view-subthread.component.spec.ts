import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubthreadComponent } from './view-subthread.component';

describe('ViewSubthreadComponent', () => {
  let component: ViewSubthreadComponent;
  let fixture: ComponentFixture<ViewSubthreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubthreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSubthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
