import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDilogComponent } from './mat-dilog.component';

describe('MatDilogComponent', () => {
  let component: MatDilogComponent;
  let fixture: ComponentFixture<MatDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
