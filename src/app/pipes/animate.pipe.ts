import {Pipe, PipeTransform} from '@angular/core';
import {interval, map, Observable, tap} from "rxjs";

@Pipe({
  name: 'animate'
})
export class AnimatePipe implements PipeTransform {

  buildText = ''
  numberObservable = new Observable<number>()

  constructor() {
    this.numberObservable = interval(70)
  }

  transform(textToAnimate: string): Observable<string> {
    return this.numberObservable.pipe(
      tap(i => this.buildText += textToAnimate.charAt(i)),
      map(() => this.buildText)
    )
  }

}
