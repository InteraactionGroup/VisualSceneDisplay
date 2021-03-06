import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SceneDisplayComponent} from './scene-display.component';
import {MatDialogModule} from '@angular/material/dialog'
import {ScrollingModule} from '@angular/cdk/scrolling';

describe('SceneDisplayComponent', () => {
  let component: SceneDisplayComponent;
  let fixture: ComponentFixture<SceneDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneDisplayComponent],
      imports: [MatDialogModule, ScrollingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
