import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrackersContent } from './crackers-content';

describe('CrackersContent', () => {
  let component: CrackersContent;
  let fixture: ComponentFixture<CrackersContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrackersContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrackersContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
