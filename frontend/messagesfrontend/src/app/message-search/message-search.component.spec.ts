import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSearchComponent } from './message-search.component';

describe('MessageSearchComponent', () => {
  let component: MessageSearchComponent;
  let fixture: ComponentFixture<MessageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
