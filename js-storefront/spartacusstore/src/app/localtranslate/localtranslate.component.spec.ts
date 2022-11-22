import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltranslateComponent } from './localtranslate.component';

describe('LocaltranslateComponent', () => {
  let component: LocaltranslateComponent;
  let fixture: ComponentFixture<LocaltranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaltranslateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaltranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
