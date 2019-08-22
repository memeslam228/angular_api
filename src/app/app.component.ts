import {Component, ViewChild} from '@angular/core';
import {MatDialog, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';

import {ApiCrudService} from './services/api-crud.service';
import {DialogAddComponent} from './dialog-add/dialog-add.component';

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

  editItem(itemId: string) {
    console.log(itemId);
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

  openEditDialog(): void {
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

}
