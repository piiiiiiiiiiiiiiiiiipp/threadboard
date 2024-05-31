import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubthreadsComponent } from './list-subthreads.component';

describe('SubthreadsComponent', () => {
  let component: ListSubthreadsComponent;
  let fixture: ComponentFixture<ListSubthreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSubthreadsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSubthreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
