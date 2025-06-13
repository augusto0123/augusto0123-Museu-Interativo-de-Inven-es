import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInvencoesComponent } from './lista-invencoes.component';

describe('ListaInvencoesComponent', () => {
  let component: ListaInvencoesComponent;
  let fixture: ComponentFixture<ListaInvencoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaInvencoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInvencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
