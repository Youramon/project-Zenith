import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinItemComponent } from './ein-item.component';

describe('EinItemComponent', () => {
  let component: EinItemComponent;
  let fixture: ComponentFixture<EinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EinItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
