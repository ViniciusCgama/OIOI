import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarprodutoComponent } from './cadastrarproduto.component';

describe('CadastrarprodutoComponent', () => {
  let component: CadastrarprodutoComponent;
  let fixture: ComponentFixture<CadastrarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
