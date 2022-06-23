import { fromEvent, interval } from 'rxjs';
import { map, switchMap, take, tap, concatMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const button = document.querySelector('#btn')
const observable = fromEvent(
    button,
    'click'
).pipe(
    concatMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete() {
                    console.log('inner observable complete')
                }
            }),
        )
        // return interval(1000).pipe(
        //     take(5),
        //     tap({
        //         complete() {
        //             console.log('inner observable complete')
        //         }
        //     }),
        // )
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