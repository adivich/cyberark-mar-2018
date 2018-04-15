import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {NgReduxModule, NgRedux, DevToolsExtension} from '@angular-redux/store'
import { AppComponent } from './app.component';
import { PropertiesPanelComponent } from './properties-panel/properties-panel.component';
import { EditorService} from "./editor.service";
import { WorkingAreaComponent } from './working-area/working-area.component';
import { ElementsNavigatorComponent } from './elements-navigator/elements-navigator.component';
import { SharedModule} from "./shared/shared.module";
import { EditorComponent } from './editor/editor.component';
import {AuthModule} from "./auth/auth.module";
import { EditorActionsComponent } from './editor-actions/editor-actions.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditorProjectsComponent } from './editor-projects/editor-projects.component';
import {reducer} from './store';

//const routes: Routes;

@NgModule({
  declarations: [AppComponent, PropertiesPanelComponent, WorkingAreaComponent, ElementsNavigatorComponent, EditorComponent, EditorActionsComponent, PageNotFoundComponent, EditorProjectsComponent],
  imports: [BrowserModule, AuthModule,  AppRoutingModule, SharedModule, HttpClientModule, NgReduxModule],
  providers: [EditorService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>, devTools: DevToolsExtension){
    ngRedux.configureStore(
      reducer, 
      undefined,
      [],
      [devTools.enhancer()]
    );
  }
}
