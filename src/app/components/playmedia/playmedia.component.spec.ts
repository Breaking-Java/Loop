import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymediaComponent } from './playmedia.component';

describe('PlaymediaComponent', () => {
  let component: PlaymediaComponent;
  let fixture: ComponentFixture<PlaymediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaymediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaymediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
