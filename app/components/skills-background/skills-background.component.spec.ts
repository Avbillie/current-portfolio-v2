import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBackgroundComponent } from './skills-background.component';

describe('SkillsBackgroundComponent', () => {
  let component: SkillsBackgroundComponent;
  let fixture: ComponentFixture<SkillsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
