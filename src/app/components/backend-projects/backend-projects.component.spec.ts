import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendProjectsComponent } from './backend-projects.component';

describe('BackendProjectsComponent', () => {
  let component: BackendProjectsComponent;
  let fixture: ComponentFixture<BackendProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
