import { fromEvent, Observable, of, map, filter } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

const observable = new Observable(subscriber => {
    subscriber.next('Hello')
    subscriber.next('Diginamic')
    subscriber.complete()

});
// of('Hello', 'RxJS').subscribe(console.log);
observable.subscribe(val => {
    console.log(val)
})