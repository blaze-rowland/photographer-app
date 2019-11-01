import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedNavComponent } from './unauthorized-nav.component';

describe('UnauthorizedNavComponent', () => {
  let component: UnauthorizedNavComponent;
  let fixture: ComponentFixture<UnauthorizedNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
