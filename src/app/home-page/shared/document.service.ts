import {Injectable} from '@angular/core';
import {Document} from '../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DocumentService {
  id = '';

  constructor() {
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  getDocument(id) {
    const code = 200;
    const error = 'some error';
    if (code === 200) {
      return {code, body: localStorage.getItem(id)};
    } else {
      console.log(error);
    }
  }

  saveDocument(approver: string, document, state) {
    const doc: Document = {
      id: '1',
      approver,
      resolution: document.radio,
      comment: document.comment,
      state
    };
    return new Observable(subscriber => {
      subscriber.next(doc);
    });
  }

}
