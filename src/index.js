import { from, of } from 'rxjs';
import { map } from 'rxjs/operators'

const observable = of(1, 2, 3, 4, 5)

const numbersWithSymbol = observable.pipe(
    map((value) => `$${value}`)
)

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('of completes after iteration')
    }
})

console.log('hello');

numbersWithSymbol.subscribe(console.log)