import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UIService {
  private showForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleFormDisplay(): void {
    this.showForm = !this.showForm;
    this.subject.next(this.showForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
