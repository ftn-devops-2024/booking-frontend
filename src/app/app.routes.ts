import {RouterModule, Routes} from '@angular/router';
import {LoginRegistrationComponent} from "./screen/login-registration/login-registration.component";
import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./screen/edit-profile/edit-profile.component";
import {CreateStayComponent} from "./screen/create-stay/create-stay.component";
import {HttpClientModule} from "@angular/common/http";

export const routes: Routes = [
  { path: '', component: LoginRegistrationComponent},
  {path:'edit', component: EditProfileComponent},
  {path:'create-stay', component: CreateStayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
