import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseifElseConditionComponent } from './if-elseif-else-condition.component';

describe('IfElseifElseConditionComponent', () => {
  let component: IfElseifElseConditionComponent;
  let fixture: ComponentFixture<IfElseifElseConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseifElseConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseifElseConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
