import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {set, update} from 'lodash/fp';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as deepFreeze from 'deep-freeze';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
/*
  const state = {
    editor: {
      elements: [
        { tag: 'h1', text: 'element1', opacity: 0.3},
        { tag: 'h2', text: 'element2', opacity: 0.5}

      ]
    }
  };
  deepFreeze(state);
  console.log(state);

  const state2 = set(['editor', 'elements', 1, 'text'], 'new element2', state);

console.log(state2);

const state3 = update(['editor', 'elements'], () => [...state.editor.elements, { tag: 'h2', text: 'brand new'}, state2);

console.log(state3);
debugger;
const invert = element => opacity => 1 - element.opacity ;
const state4 = update(['editor', 'elements', 0, 'opacity'], invert(state3.editor.elements[0]), state3);
console.log(state4);
*/