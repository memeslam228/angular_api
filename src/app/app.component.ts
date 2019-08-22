import {Component, ViewChild} from '@angular/core';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';

import {ApiCrudService} from './services/api-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayedColumns: string[] = ['id', 'title', 'userId', 'completed', 'edit'];
  dataSource: any;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) matTable: MatTable<any>;

  constructor(private crud: ApiCrudService) {
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
      console.log(error);
    });
  }

  deleteItem(itemId: string) {
    this.crud.delete(itemId).subscribe(() => {
      this.getPosts();
      console.log('Success!!!');
    },
        error => console.log(error));
  }

  editItem(itemId: string) {
    console.log(itemId);
  }

  addItem() {
    console.log('Added!!!');
  }
}
