
const   { Observable } = require('rxjs')

const observable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
        subscriber.next('hi')
    }, 1000);
});
observable.
