import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PoliceComponent } from './police/police.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'police', component: PoliceComponent},
  {path: 'case', component: CaseComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'reviews', component: ReviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
