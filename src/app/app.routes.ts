import {RouterModule, Routes} from '@angular/router';
import {LoginRegistrationComponent} from "./screen/login-registration/login-registration.component";
import {NgModule} from "@angular/core";
import {EditProfileComponent} from "./screen/edit-profile/edit-profile.component";
import {CreateStayComponent} from "./screen/create-stay/create-stay.component";
import {HomepageComponent} from "./screen/homepage/homepage.component";
import {MyStaysComponent} from "./screen/my-stays/my-stays.component";
import {HttpClientModule} from "@angular/common/http";
import {ReservationApproveComponent} from "./screen/reservation-approve/reservation-approve.component";
import {MyReservationsComponent} from "./screen/my-reservations/my-reservations.component";
import {HostReviewComponent} from "./screen/host-review/host-review.component";
import {StayReviewComponent} from "./screen/stay-review/stay-review.component";
import {EnableNotificationsComponent} from "./screen/enable-notifications/enable-notifications.component";
import {DisplayHostReviewComponent} from "./screen/display-host-review/display-host-review.component";
import {DisplayStayReviewComponent} from "./screen/display-stay-review/display-stay-review.component";

export const routes: Routes = [
  { path: '', component: LoginRegistrationComponent},
  {path:'edit', component: EditProfileComponent},
  {path:'create-stay/:id', component: CreateStayComponent},
  {path:'home', component: HomepageComponent},
  {path:'my-stays', component: MyStaysComponent},
  {path:'approve', component: ReservationApproveComponent},
  {path:'reservations', component: MyReservationsComponent},
  {path:'host-review', component: HostReviewComponent},
  {path:'stay-review', component: StayReviewComponent},
  {path:'notifications', component: EnableNotificationsComponent},
  {path:'host-reviews/:id', component: DisplayHostReviewComponent},
  {path:'stay-reviews/:id', component: DisplayStayReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
