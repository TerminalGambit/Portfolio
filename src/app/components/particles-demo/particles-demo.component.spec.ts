import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesDemoComponent } from './particles-demo.component';

describe('ParticlesDemoComponent', () => {
  let component: ParticlesDemoComponent;
  let fixture: ComponentFixture<ParticlesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticlesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticlesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
