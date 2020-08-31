import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {DocumentService} from './shared/document.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  form: FormGroup;


  constructor(private documentService: DocumentService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      radio: new FormControl(null, [Validators.required]),
      comment: new FormControl(null),
    });
  }

  submit(state) {
    const approver = localStorage.getItem('approver');
    const id = uuid.v4();
    if (this.form.invalid) {
      return;
    }
    this.documentService.setId(id);
    this.documentService.saveDocument(approver, this.form.value, state).subscribe({
      next(x) {
        localStorage.setItem(id, JSON.stringify(x));
      },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    this.router.navigate(['/', 'result']);
  }

}
