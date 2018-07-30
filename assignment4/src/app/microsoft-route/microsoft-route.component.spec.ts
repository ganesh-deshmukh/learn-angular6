import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftRouteComponent } from './microsoft-route.component';
import { IndexRouteComponent } from '../index-route/index-route.component';

describe('MicrosoftRouteComponent', () => {
  let component: MicrosoftRouteComponent;
  let fixture: ComponentFixture<MicrosoftRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrosoftRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
