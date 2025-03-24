import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvcProjectsComponent } from './mvc-projects.component';

describe('MvcProjectsComponent', () => {
  let component: MvcProjectsComponent;
  let fixture: ComponentFixture<MvcProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvcProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvcProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
