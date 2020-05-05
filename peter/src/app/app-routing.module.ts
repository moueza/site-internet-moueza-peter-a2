import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { TennisMatchCounterComponent } from './tennis-match-counter/tennis-match-counter.component';

import { SwordKilledWomanMouezaBlenderComponent } from './sword-killed-woman-moueza-blender/sword-killed-woman-moueza-blender.component';


import { MaisonDeLaMerComponent } from './maison-de-la-mer/maison-de-la-mer.component';

const routes: Routes = [
 { path: 'menu', component: MenuComponent },
 { path: 'arbitrage', component: TennisMatchCounterComponent },

{ path: 'sword-woman-moueza', component: SwordKilledWomanMouezaBlenderComponent }

{ path: 'maison-de-la-mer', component: MaisonDeLaMerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
