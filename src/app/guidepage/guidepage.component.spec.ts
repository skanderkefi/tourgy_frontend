import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidepageComponent } from './guidepage.component';

describe('GuidepageComponent', () => {
  let component: GuidepageComponent;
  let fixture: ComponentFixture<GuidepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
