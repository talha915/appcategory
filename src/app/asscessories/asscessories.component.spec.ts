import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsscessoriesComponent } from './asscessories.component';

describe('AsscessoriesComponent', () => {
  let component: AsscessoriesComponent;
  let fixture: ComponentFixture<AsscessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsscessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsscessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
