import { from, of, fromEvent } from 'rxjs';
import { map, pluck, filter } from 'rxjs/operators'

const observable = fromEvent(
    document,
    'keydown'
).pipe(
    pluck('code'),
    filter(code => code === "Space")
)

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('of completes after iteration')
    }
})