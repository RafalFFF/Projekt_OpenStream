import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlowLegendComponent } from './flow-legend.component';

describe('FlowLegendComponent', () => {
  let component: FlowLegendComponent;
  let fixture: ComponentFixture<FlowLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowLegendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
