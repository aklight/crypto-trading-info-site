import * as path from 'path';

const h1: any = document.querySelector('h2');
h1.innerHTML = '!Some stuff here!!' + path.join('a', 'b', 'c');
