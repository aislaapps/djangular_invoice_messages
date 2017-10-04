import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageResultsComponent } from './message-results.component';

describe('MessageResultsComponent', () => {
  let component: MessageResultsComponent;
  let fixture: ComponentFixture<MessageResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
