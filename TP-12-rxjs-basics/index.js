import { fromEvent, Observable, of, map, filter } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const observable = new Observable(subscriber => {
    setInterval(() => {
        subscriber.next('Evenement' + getRandomInt(100))
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 6000)

});



const myObserver = {
    next: (val) => {
        console.log('NEXT', val)
            //Je vais afficher les données recu 
    },
    error: (err) => {
        console.log('ERROR', err)
            // Je vais crash 
    },
    complete: () => {
        // je vais liberer mes ressource 
        // je vais sortir de l'ecran\
        // je vais desactiver le champ de text 
        console.log('COMPLETE')
    }
}

// const mySubscription = observable.subscribe(myObserver);
// const mySubscription2 = observable.subscribe(val => {
//     console.log('NEXT 2 ' + val);
// })


// mySubscription.unsubscribe();


// of('Hello', 'RxJS').subscribe(console.log);


function myOf(...args) {
    return new Observable(subscriber => {
        args.forEach(elem => {
            subscriber.next(elem);
        })
        subscriber.complete()
    });
}

myOf({ name: 'jean' }, { name: 'Dupont' })
    .subscribe(console.log);