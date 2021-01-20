import { fromEvent, interval, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged, filter, map, mapTo, pluck, reduce, scan, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */


// TRANSFORMATION OPERATORS (map, pluck, mapTo)

fromEvent(document, 'click')
    .pipe(
        map(ev => {
            return ev.clientX
        })
    )

fromEvent(document, 'click')
    .pipe(
        pluck('clientX')
    )

const obj = {
    name: 'Jean',
    departement: {
        id: 100,
        label: 'Lorem'
    }
}

of(obj)
    .pipe(
        pluck('departement', 'label')
    )

fromEvent(document, 'click')
    .pipe(
        mapTo('Le client a cliqué')
    )

// OPERATEUR DE FILTRE 

fromEvent(document, 'click')
    .pipe(
        filter(elem => {
            return elem.clientY > 100
        }),
        map(elem => {
            return { x: elem.clientX, y: elem.clientY }
        }),
        pluck('x')
    )

// Modifier la taille du progress bar selon l'etat du scroll de l'utilisation, 
// 0% : l'utilisateur n'a pas scroll 100% : l'utilisateur arrive a la fin de la page 
fromEvent(document, 'scroll')
    .pipe(
        pluck('target', 'scrollingElement'),
        map(ev => {
            const percent = ev.scrollTop / (ev.scrollHeight - ev.clientHeight) * 100;
            return Math.round(percent)
        })
    )
    .subscribe(poucentage => {
        // document.getElementById('progress-bar').style.width = `${poucentage}%`
    })


// OPERATEUR TAP 
fromEvent(document, 'click')
    .pipe(
        tap(clickEvent => {
            console.log('TAP IS HERE')
        })
    )

// SCAN / Reduce OPERATOR : (avec memoire)

interval(1000)
    .pipe(
        take(5),
        scan((acc, val) => {
            return acc + val;
        })
    )

// Take, TakeWhile takeUntile 

interval(1000)
    .pipe(
        scan((acc, val) => {
            return acc + val;
        }),
        takeWhile(x => x < 10)
    )


const source2$ = new Subject();
const source1$ = interval(1000);

source1$
    .pipe(
        takeUntil(source2$)
    )


fromEvent(document, 'click')
    .pipe(
        tap(clickEvent => {
            console.log('subject.next');
            source2$.next(10);
        })
    )

// distinctUntilChanged

of({
    name: 'Dupond',
    age: 30
}, {
    name: 'Dupond',
    age: 25
}, {
    name: 'Dupond2',
    age: 40
}).pipe(
    distinctUntilKeyChanged('name')
)

// Ignorer les doublons et ajouter un debouce time de 300 - 500 ms pour optimiser les requetes de recherche
fromEvent(document.getElementById('search-input'), 'keyup')
    .pipe(
        pluck('target', 'value'),
        tap(ev => {
            console.log(ev);
        })
    ).subscribe()