import {Pipe, PipeTransform} from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Pipe({
  name: 'delay'
})
export class DelayPipe implements PipeTransform {

  transform(text: string, delayAmount: number): Observable<string> {
    return of(text).pipe(
      delay(delayAmount)
    )
  }

}
