import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingToolComponent } from './ping-tool.component';

describe('PingToolComponent', () => {
  let component: PingToolComponent;
  let fixture: ComponentFixture<PingToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
