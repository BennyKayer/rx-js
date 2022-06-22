import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
    const interval = setInterval(() => {
        subscriber.next('test')
        console.log('leak');
    }, 1000)

    return () => {
        clearInterval(interval)
    }
});

const subscription = observable.subscribe({
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

setTimeout(() => {
    subscription.unsubscribe()
}, 4000);