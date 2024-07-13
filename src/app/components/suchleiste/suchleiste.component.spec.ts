import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuchleisteComponent } from './suchleiste.component';

describe('SuchleisteComponent', () => {
  let component: SuchleisteComponent;
  let fixture: ComponentFixture<SuchleisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuchleisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuchleisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
