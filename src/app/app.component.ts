import {Component, ViewChild} from '@angular/core';

import {MatDialog, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';

import {ApiCrudService} from './services/api-crud.service';

import {DialogAddComponent} from './dialog-add/dialog-add.component';
import {DialogPatchComponent} from './dialog-patch/dialog-patch.component';

import {Todo} from './services/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayedColumns: string[] = ['id', 'title', 'userId', 'completed', 'edit'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private crud: ApiCrudService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.getPosts();
  }

  getPosts() {
    this.crud.get().subscribe(res => {
      const items: any = res.body;
      this.dataSource = new MatTableDataSource(items);
      setTimeout(() => {
        this.dataSource.sort = this.sort;
      });
    }, error => {
      this.openSnackBar(error);
    });
  }

  deleteItem(itemId: string) {
    this.crud.delete(itemId).subscribe(() => {
        this.getPosts();
        this.openSnackBar('It was deleted!!!');
      },
      error => this.openSnackBar(error));
  }

  editItem(id: string, title: string, completed: boolean, itemId: string) {
    this.crud.patch(id, title, completed, itemId).subscribe(() => {
        this.getPosts();
        this.openSnackBar('It was successfully edited!!!');
      },
      error => this.openSnackBar(error));
  }

  addItem(title: string, userId: string, completed: boolean) {
    this.crud.post(title, completed, userId).subscribe(() => {
        this.getPosts();
        this.openSnackBar('It was successfully added!!!');
      },
      error => this.openSnackBar(error));
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addItem(result.title, result.userId, result.completed);
      }
    });
  }

  openEditDialog(item: Todo): void {
    const dialogRef = this.dialog.open(DialogPatchComponent, {
      width: '500px',
      data: {id: item.id, userId: item.userId, title: item.title, completed: item.completed}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editItem(result.id, result.title, result.completed, result.userId);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

}
