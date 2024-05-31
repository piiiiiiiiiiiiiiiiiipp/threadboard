import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubthreadSideBarComponent } from './subthread-side-bar.component';

describe('SubthreadSideBarComponent', () => {
  let component: SubthreadSideBarComponent;
  let fixture: ComponentFixture<SubthreadSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubthreadSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubthreadSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
