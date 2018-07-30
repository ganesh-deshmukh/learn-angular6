import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexRouteComponent } from './index-route/index-route.component';
// import { JavarouteComponent } from './javaroute/javaroute.component';
// import { MicrosoftRouteComponent } from './microsoft-route/microsoft-route.component';
// import { JavaRouteComponent } from './java-route/java-route.component';
// import { TestingRouteComponent } from './testing-route/testing-route.component';
// import { PythonComponentComponent } from './python-component/python-component.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // IndexRouteComponent, 
    // JavarouteComponent,
    // MicrosoftRouteComponent,
    // JavaRouteComponent,
    // TestingRouteComponent,
    // PythonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
