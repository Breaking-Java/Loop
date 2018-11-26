import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSeriesComponent } from './catalog-series.component';

describe('CatalogSeriesComponent', () => {
  let component: CatalogSeriesComponent;
  let fixture: ComponentFixture<CatalogSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
