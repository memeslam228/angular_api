import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Todo} from '../services/todo';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: [],
      title: [],
      completed: []
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.value);
  }

}
