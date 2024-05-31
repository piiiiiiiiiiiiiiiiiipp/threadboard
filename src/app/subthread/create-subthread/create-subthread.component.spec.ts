import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubthreadComponent } from './create-subthread.component';

describe('CreateSubthreadComponent', () => {
  let component: CreateSubthreadComponent;
  let fixture: ComponentFixture<CreateSubthreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSubthreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSubthreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
