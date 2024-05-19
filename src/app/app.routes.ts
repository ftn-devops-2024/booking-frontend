import {RouterModule, Routes} from '@angular/router';
import {LoginRegistrationComponent} from "./screen/login-registration/login-registration.component";
import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./screen/edit-profile/edit-profile.component";

export const routes: Routes = [
  { path: '', component: LoginRegistrationComponent},
  {path:'edit', component: EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
