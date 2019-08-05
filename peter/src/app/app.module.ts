import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TennisMatchCounterComponent } from './tennis-match-counter/tennis-match-counter.component';
import { SwordKilledWomanMouezaBlenderComponent } from './sword-killed-woman-moueza-blender/sword-killed-woman-moueza-blender.component';
import { ChronometreMouezaComponent } from './chronometre-moueza/chronometre-moueza.component';
import { AlarmMouezaComponent } from './alarm-moueza/alarm-moueza.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TennisMatchCounterComponent,
    SwordKilledWomanMouezaBlenderComponent,
    ChronometreMouezaComponent,
    AlarmMouezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
