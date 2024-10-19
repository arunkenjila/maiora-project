import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  leaveForm: FormGroup | undefined;

  constructor(private formbuilder: FormBuilder) {
    this.leaveForm = formbuilder.group({
      class: new FormControl('', [Validators.required]),
      section: new FormControl('', Validators.required),

      student: new FormControl('', [Validators.required]),
      reason: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.leaveForm.value);
  }
}
