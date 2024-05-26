import {RouterModule, Routes} from '@angular/router';
import {LoginRegistrationComponent} from "./screen/login-registration/login-registration.component";
import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./screen/edit-profile/edit-profile.component";
import {CreateStayComponent} from "./screen/create-stay/create-stay.component";
import {HomepageComponent} from "./screen/homepage/homepage.component";

export const routes: Routes = [
  { path: '', component: LoginRegistrationComponent},
  {path:'edit', component: EditProfileComponent},
  {path:'create-stay', component: CreateStayComponent},
  {path:'home', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
