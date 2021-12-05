import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonAllComponent } from './digimon-all.component';

describe('DigimonAllComponent', () => {
  let component: DigimonAllComponent;
  let fixture: ComponentFixture<DigimonAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigimonAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigimonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
