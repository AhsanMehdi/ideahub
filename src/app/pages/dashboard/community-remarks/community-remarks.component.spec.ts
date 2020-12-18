import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRemarksComponent } from './community-remarks.component';

describe('CommunityRemarksComponent', () => {
  let component: CommunityRemarksComponent;
  let fixture: ComponentFixture<CommunityRemarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityRemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
