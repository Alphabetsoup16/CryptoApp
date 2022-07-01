import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesComponent } from './exchanges/exchanges.component';

const routes: Routes = [
  { path: 'exchanges', component: ExchangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
