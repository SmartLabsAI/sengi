import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NgxElectronModule } from "ngx-electron";

import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { AppComponent } from "./app.component";
import { LeftSideBarComponent } from "./components/left-side-bar/left-side-bar.component";
import { StreamsMainDisplayComponent } from "./pages/streams-main-display/streams-main-display.component";
import { StreamComponent } from "./components/stream/stream.component";
import { StreamsSelectionFooterComponent } from "./components/streams-selection-footer/streams-selection-footer.component";
import { RegisterNewAccountComponent } from "./pages/register-new-account/register-new-account.component";
import { AuthService } from "./services/auth.service";
import { StreamingService } from "./services/streaming.service";
import { RegisteredAppsState } from "./states/registered-apps.state";
import { AccountsState } from "./states/accounts.state";
import { AccountIconComponent } from './components/left-side-bar/account-icon/account-icon.component';
import { NavigationService } from "./services/navigation.service";
import { FloatingColumnComponent } from './components/floating-column/floating-column.component';
import { StreamsState } from "./states/streams.state";
import { StatusComponent } from "./components/stream/status/status.component";
import { MastodonService } from "./services/mastodon.service";
import { AttachementsComponent } from './components/stream/status/attachements/attachements.component';
import { SettingsComponent } from './components/floating-column/settings/settings.component';
import { AddNewAccountComponent } from './components/floating-column/add-new-account/add-new-account.component';
import { SearchComponent } from './components/floating-column/search/search.component';
import { AddNewStatusComponent } from "./components/floating-column/add-new-status/add-new-status.component";
import { ManageAccountComponent } from "./components/floating-column/manage-account/manage-account.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: StreamsMainDisplayComponent },
  { path: "register", component: RegisterNewAccountComponent}, 
  { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    LeftSideBarComponent,
    StreamsMainDisplayComponent,
    StreamComponent,
    StreamsSelectionFooterComponent,
    StatusComponent,
    RegisterNewAccountComponent,
    AccountIconComponent,
    FloatingColumnComponent,
    ManageAccountComponent,
    AddNewStatusComponent,
    AttachementsComponent,
    SettingsComponent,
    AddNewAccountComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgxElectronModule,
    RouterModule.forRoot(routes),

    NgxsModule.forRoot([
      RegisteredAppsState,
      AccountsState,
      StreamsState
    ]),
    NgxsStoragePluginModule.forRoot()
  ],
  providers: [AuthService, NavigationService, MastodonService, StreamingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
