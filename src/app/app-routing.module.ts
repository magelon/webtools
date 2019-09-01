import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PingToolComponent } from './ping-tool/ping-tool.component';


const routes: Routes = [
  {path:'ping',component:PingToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
