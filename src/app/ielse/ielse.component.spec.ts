import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IelseComponent } from './ielse.component';

describe('IelseComponent', () => {
  let component: IelseComponent;
  let fixture: ComponentFixture<IelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
