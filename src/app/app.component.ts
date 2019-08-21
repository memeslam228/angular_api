import {Component, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import {ApiCrudService} from './services/api-crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  displayedColumns: string[] = ['id', 'title', 'userId', 'completed'];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private crud: ApiCrudService) {
    this.getPosts();
  }

  getPosts() {
    this.crud.get().subscribe(res => {
      const items: any = res.body;
      this.dataSource = new MatTableDataSource(items);
    });
  }

}
