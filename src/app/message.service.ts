import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MessageService {
private subject = new Subject<string>();

  constructor() { }

  push(msg:string):void {
    console.log(msg);
    this.subject.next(msg);
  }

  clear(){
    this.subject.next();
  }

  pop(): Observable<string>{
    return this.subject.asObservable();
  }


}
