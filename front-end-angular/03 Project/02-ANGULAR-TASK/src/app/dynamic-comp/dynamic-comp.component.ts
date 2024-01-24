import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product-service.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent {
  dynamicForm: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.dynamicForm = this.fb.group({
      rows: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    // Initialize with 10 rows
    this.addRows(10);
  }

  addRows(count: number): void {
    for (let i = 0; i < count; i++) {
      this.addRow();
    }
  }

  addRow(): void {
    const row = this.fb.group({
      code: ['', Validators.required],
      product: [null],
      priceCarton: [{ value: null, disabled: true }],
      priceSingle: [{ value: null, disabled: true }],
      quantityCarton: [null],
      quantitySingle: [null],
      totalAmount: [{ value: null, disabled: true }],
    });

    this.rows.push(row);
  }

  removeRow(index: number): void {
    this.rows.at(index).reset();
  }

  fetchProductData(index: number): void {
    const code = this.rows.at(index).get('code')?.value;
    this.productService.getProductData(code).subscribe(
      (product: Product) => {
        this.rows.at(index).patchValue({
          product,
          priceCarton: product.priceCarton,
          priceSingle: product.priceSingle,
        });
      },
      (error:any) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  get rows() {
    return this.dynamicForm.get('rows') as FormArray;
  }

  saveAll(): void {
    // Add logic to save all rows
    console.log('Saved Data:', this.dynamicForm.value);
  }

  deleteAll(): void {
    // Add logic to reset all rows
    this.dynamicForm.reset();
  }

  addToCartList(): void {
    // Add logic to add all rows to the cart list
    console.log('Added to Cart List:', this.dynamicForm.value);
  }

  addColumn(): void {
    // Add logic to add a column
    this.addRows(1);
  }
}
