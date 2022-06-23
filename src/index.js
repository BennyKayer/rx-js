import { timer, interval } from 'rxjs';

const observable = interval(1000)

// const subscription = observable.subscribe(console.log)

const observable_2 = timer(0, 1000)

observable_2.subscribe(console.log)