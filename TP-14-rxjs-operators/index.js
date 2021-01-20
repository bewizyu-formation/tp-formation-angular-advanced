import { fromEvent, Observable, of } from 'rxjs';
import { filter, map, mapTo, pluck } from 'rxjs/operators';

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
        // scrollTop / (scrollHeight - clientHeight)
        // document.getElementById('')
        document.getElementById('progress-bar').style.width = `${poucentage}%`
    })