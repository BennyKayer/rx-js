import { from, of, fromEvent } from 'rxjs';
import { map, pluck, filter, reduce } from 'rxjs/operators'

const observable = fromEvent(
    document,
    'keydown'
).pipe(
    pluck('code'),
    filter(code => code === "Space")
)

of(1, 2, 3, 4, 5).pipe(
    reduce((acc, value) => acc + value, 0)
).subscribe(console.log)

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('of completes after iteration')
    }
})