import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackersBlast } from './crackers-blast';

describe('CrackersBlast', () => {
  let component: CrackersBlast;
  let fixture: ComponentFixture<CrackersBlast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrackersBlast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrackersBlast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
