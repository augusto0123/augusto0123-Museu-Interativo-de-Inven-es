import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInvencaoComponent } from './cadastro-invencao.component';

describe('CadastroInvencaoComponent', () => {
  let component: CadastroInvencaoComponent;
  let fixture: ComponentFixture<CadastroInvencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroInvencaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroInvencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
