import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { TennisMatchCounterComponent } from './tennis-match-counter/tennis-match-counter.component';

const routes: Routes = [
 { path: 'menu', component: MenuComponent },
 { path: 'arbitrage', component: TennisMatchCounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
