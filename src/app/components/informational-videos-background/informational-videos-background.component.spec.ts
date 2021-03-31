import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalVideosBackgroundComponent } from './informational-videos-background.component';

describe('InformationalVideosBackgroundComponent', () => {
  let component: InformationalVideosBackgroundComponent;
  let fixture: ComponentFixture<InformationalVideosBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationalVideosBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationalVideosBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
