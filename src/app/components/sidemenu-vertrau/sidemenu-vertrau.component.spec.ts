import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuVertrauComponent } from './sidemenu-vertrau.component';

describe('SidemenuVertrauComponent', () => {
  let component: SidemenuVertrauComponent;
  let fixture: ComponentFixture<SidemenuVertrauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidemenuVertrauComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidemenuVertrauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
