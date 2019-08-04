import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { TennisMatchCounterComponent } from './tennis-match-counter/tennis-match-counter.component';

import { SwordKilledWomanMouezaBlenderComponent } from './sword-killed-woman-moueza-blender/sword-killed-woman-moueza-blender.component';

const routes: Routes = [
 { path: 'menu', component: MenuComponent },
 { path: 'arbitrage', component: TennisMatchCounterComponent },

{ path: 'sword-woman-moueza', component: SwordKilledWomanMouezaBlenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
