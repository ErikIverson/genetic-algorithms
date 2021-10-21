import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputConsoleComponent } from './output-console.component';

describe('OutputConsoleComponent', () => {
  let component: OutputConsoleComponent;
  let fixture: ComponentFixture<OutputConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
