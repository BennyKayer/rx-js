import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
    
});

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete called!');
    },
    error: (err) => {
        console.error(err);
    }
})