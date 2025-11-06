import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantMonitor } from './plant-monitor';

describe('PlantMonitor', () => {
  let component: PlantMonitor;
  let fixture: ComponentFixture<PlantMonitor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantMonitor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantMonitor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
