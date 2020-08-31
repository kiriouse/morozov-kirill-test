import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../home-page/shared/document.service';
import {Document} from '../shared/interfaces';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private documentService: DocumentService) { }

  displayedColumns: string[] = ['approver', 'resolution', 'comment', 'state'];
  dataSource;
  state: number;

  ngOnInit() {
    const id = this.documentService.getId();
    const response = this.documentService.getDocument(id);
    const data = JSON.parse(response.body) ? JSON.parse(response.body) : null;

    if (data) {
      this.dataSource = [{approver: data.approver, resolution: data.resolution, comment: data.comment, state: data.state}]
    } else {
      console.log('error');
    }
    this.state = JSON.parse(response.body) ? JSON.parse(response.body).state : null;
  }

}
