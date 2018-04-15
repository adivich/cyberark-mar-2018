import { Component} from '@angular/core';
import {EditorService} from "./editor.service";

@Component({
  selector: 'ca-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <header>
      <a routerLink="/login" routerLinkActive="link-active">Login</a>
      <a routerLink="/editor"  routerLinkActive="link-active">Editor</a>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [
      `.container { display: flex; height: 100% }
      header {background-color: lightgrey; margin: auto}
      header a {text-decoration: none; padding: 15px; display: inline-block;}
      .link-active {font-weight: bold;background-color: white; border: 1px solid rgb(0,0,238); border-radius: 2px;}`
  ]
})
export class AppComponent {

  constructor(public editor: EditorService){

  }


}
