import { from, of, fromEvent, interval } from 'rxjs';
import { map, pluck, filter, reduce, take, scan, tap } from 'rxjs/operators'

const observable = fromEvent(
    document,
    'keydown'
).pipe(
    pluck('code'),
    filter(code => code === "Space")
)

interval(500).pipe(
    take(5),
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