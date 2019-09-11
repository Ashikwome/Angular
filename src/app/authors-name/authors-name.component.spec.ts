import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsNameComponent } from './authors-name.component';

describe('AuthorsNameComponent', () => {
  let component: AuthorsNameComponent;
  let fixture: ComponentFixture<AuthorsNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
