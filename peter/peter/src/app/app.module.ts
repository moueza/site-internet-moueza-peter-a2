import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TennisMatchCounterComponent } from './tennis-match-counter/tennis-match-counter.component';
import { SwordKilledWomanMouezaBlenderComponent } from './sword-killed-woman-moueza-blender/sword-killed-woman-moueza-blender.component';
import { ChronometreMouezaComponent } from './chronometre-moueza/chronometre-moueza.component';
import { AlarmMouezaComponent } from './alarm-moueza/alarm-moueza.component';
import { MusiqueMusicMouezaComponent } from './musique-music-moueza/musique-music-moueza.component';
import { BlenderV28ShortcutsMouezaComponent } from './blender-v28-shortcuts-moueza/blender-v28-shortcuts-moueza.component';
import { MaisonDeLaMerComponent } from './maison-de-la-mer/maison-de-la-mer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TennisMatchCounterComponent,
    SwordKilledWomanMouezaBlenderComponent,
    ChronometreMouezaComponent,
    AlarmMouezaComponent,
    MusiqueMusicMouezaComponent,
    BlenderV28ShortcutsMouezaComponent,
    MaisonDeLaMerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
