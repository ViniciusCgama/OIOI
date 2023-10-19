import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprodutosComponent } from './listarprodutos.component';

describe('ListarprodutosComponent', () => {
  let component: ListarprodutosComponent;
  let fixture: ComponentFixture<ListarprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarprodutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
