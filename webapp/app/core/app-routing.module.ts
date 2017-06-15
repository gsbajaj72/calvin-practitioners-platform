import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreateCommunityComponent } from '../create-community/create-community.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

// Calvin routes
const routes : ModuleWithProviders = RouterModule.forRoot([
  { path: 'login', component: LoginComponent },
  { path: 'app', canActivate: [AuthGuard],
    children: [
            { path: 'home', component: UserDashboardComponent },
            { path: "", redirectTo: "/app/home", pathMatch: "full" },
            { path: "createCommunity", component: CreateCommunityComponent },
            { path: "profile", component: UserProfileComponent }
        ]
  },
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
], { useHash: true });


@NgModule({
  imports: [routes],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard,
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }


