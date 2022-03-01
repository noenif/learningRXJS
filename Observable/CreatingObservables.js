
const   { Observable } = require('rxjs')

const observable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
        subscriber.next('hi')
        subscriber.complete()
        console.log(`还在继续!`)

    }, 1000);
});
observable.subscribe(x =>{
        console.log(`x:`, x)

    }
)
