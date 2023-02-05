import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardService } from './Services/card.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgcontentxComponent } from './ngcontentx/ngcontentx.component';
import { TrialService } from './Services/trial.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

const appRoutes : Routes = [
  { path : '', component : CardsComponent},
  { path : 'home', component: CardsComponent},
  { path: 'parent' , component: ParentComponent },
  { path : "**", component: ErrorpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    ErrorpageComponent,
    NgcontentxComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'})
  ],
  providers: [TrialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
