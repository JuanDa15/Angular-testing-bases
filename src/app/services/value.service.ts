import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  private _value: string = 'my value';

  constructor() { }

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  getValue(): string {
    return this._value;
  }

  getPromiseValue(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (2 === 2) {
          resolve(this._value);
        } else {
          reject('the condition failed');
        }
      }, 3000)
    })
  }

  getObservableValue(): Observable<string> {
    return of('of value');
  }
}
