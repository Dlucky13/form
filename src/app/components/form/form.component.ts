import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

export interface Option {
  value: boolean;
  label: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() set currentTab(tabName: string) {
    this.firstTab = tabName === 'Первая';
    this.createFormGroup(this.firstTab)
  }

  firstTab!: boolean;
  submitted: boolean = false;
  selectOptions: Option[] = [
    {value: true, label: 'Да'},
    {value: false, label: 'Нет'}
  ]

  checkedValue: string = 'Опасность';


  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  createFormGroup(isFirstTab: boolean) {
    if (isFirstTab) {
      this.formGroup = this.fb.group({
        field1: this.fb.control(''),
        fieldGroup: this.fb.array([
          this.fb.control('')
        ]),
        list: this.fb.control(''),
        secretField: this.fb.control('secret')
      })
    } else {
      this.formGroup = this.fb.group({
        field2: this.fb.control('')
      })
    }

  }


  showFormData() {
    this.submitted = true;
  }

  getGroupControls(): FormControl[] {
    return (this.formGroup?.get('fieldGroup') as FormArray).controls as FormControl[]
  }

  addFormControl() {
    (this.formGroup?.get('fieldGroup') as FormArray).push(this.fb.control(''))
  }
}
