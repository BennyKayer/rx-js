import { from, of, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

const observable = fromEvent(
    document,
    'keydown'
).pipe(
    pluck('code')
)

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('of completes after iteration')
    }
})