import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabstisticsComponent } from './tabstistics.component';

describe('TabstisticsComponent', () => {
  let component: TabstisticsComponent;
  let fixture: ComponentFixture<TabstisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabstisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabstisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
