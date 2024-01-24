import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  formControls: { [key: string]: any }[] = [];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit(): void {
    // Initialize with 10 columns
    this.addColumns(10);
  }

  addColumns(count: number): void {
    for (let i = 1; i <= count; i++) {
      const controlName = `column${i}`;
      const formControl = this.fb.control('', Validators.required);
      this.dynamicForm.addControl(controlName, formControl);
      this.formControls.push({ [controlName]: formControl });
    }
  }

  deleteAll(): void {
    this.dynamicForm.reset();
  }

  saveAll(): void {
    // Add logic to save the data
    console.log('Saved Data:', this.dynamicForm.value);
  }

  addToColumnList(): void {
    // Add logic to add data to the list
    console.log('Added to List:', this.dynamicForm.value);
  }

  addSingleColumn(): void {
    const newColumnNumber = this.formControls.length + 1;
    const newControlName = `column${newColumnNumber}`;
    const formControl = this.fb.control('', Validators.required);

    this.dynamicForm.addControl(newControlName, formControl);
    this.formControls.push({ [newControlName]: formControl });

    // Log the form value to verify that the new control is added
    console.log('Form Value:', this.dynamicForm.value);
  }
}