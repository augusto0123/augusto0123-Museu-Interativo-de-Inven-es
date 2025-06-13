import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesInvencaoComponent } from './detalhes-invencao.component';

describe('DetalhesInvencaoComponent', () => {
  let component: DetalhesInvencaoComponent;
  let fixture: ComponentFixture<DetalhesInvencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesInvencaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesInvencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
