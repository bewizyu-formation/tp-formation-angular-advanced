import { fromEvent, Observable, of } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */

fromEvent(document, 'mousemove').subscribe(ev => {
    // console.log(ev.clientX)
    // console.log(ev.clientY)
    document.getElementById('id1').style.top = ev.clientY;
    document.getElementById('id1').style.left = ev.clientX;

})