import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoListarComponent } from './carrinho-listar.component';

describe('CarrinhoListarComponent', () => {
  let component: CarrinhoListarComponent;
  let fixture: ComponentFixture<CarrinhoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
