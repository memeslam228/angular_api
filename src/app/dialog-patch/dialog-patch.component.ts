import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Todo} from '../services/todo';

@Component({
  selector: 'app-dialog-patch',
  templateUrl: './dialog-patch.component.html',
  styleUrls: ['./dialog-patch.component.css']
})
export class DialogPatchComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogPatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      userId: [this.data.userId],
      title: [this.data.title],
      completed: [this.data.completed]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.form.value);
  }

}
