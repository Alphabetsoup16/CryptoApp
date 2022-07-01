import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsComponent } from './coins/coins.component';
import { ExchangesComponent } from './exchanges/exchanges.component';

const routes: Routes = [
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'coins', component: CoinsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
