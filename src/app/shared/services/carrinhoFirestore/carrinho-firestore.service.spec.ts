import { TestBed } from '@angular/core/testing';

import { CarrinhoFirestoreService } from './carrinho-firestore.service';

describe('CarrinhoFirestoreService', () => {
  let service: CarrinhoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrinhoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
