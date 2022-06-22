import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
    subscriber.next('Hello')
});

observable.subscribe({
    next: (value) => {
        console.log(value)
    }
})