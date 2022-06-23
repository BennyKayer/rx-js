import { fromEvent, interval } from 'rxjs';
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const button = document.querySelector('#btn')
const observable = fromEvent(
    button,
    'click'
).pipe(
    mergeMap(() => {
        // return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
        return interval(1000).pipe(
            tap(console.log),
            take(5)
        )
    }),
    
)

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('of completes after iteration')
    }
})