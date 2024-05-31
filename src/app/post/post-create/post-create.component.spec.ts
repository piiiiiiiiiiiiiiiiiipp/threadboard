import { ComponentFixture, TestBed } from '@angular/core/testing';

import { postCreateComponent } from './post-create.component';

describe('PostCreateComponent', () => {
  let component: postCreateComponent;
  let fixture: ComponentFixture<postCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [postCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(postCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
