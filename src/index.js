import { fromEvent } from 'rxjs';

const observable = fromEvent(
    document,
    "click"
)

observable.subscribe(console.log)