import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HelpComponent } from './help/help.component';
 import {HttpModule} from '@angular/http';
 import { HttpClientModule , HttpClient} from '@angular/common/http';
 import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { LoginComponent } from './loginguide/loginguide.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { GuidepageComponent } from './guidepage/guidepage.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';






const appRoute : Routes = [
  {path:'', component:HomeComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Help', component:HelpComponent},
  {path:'Login', component:LoginComponent},
  {path:'AdminLogin', component:AdminLoginComponent},
  {path:'GuidePage', component:GuidepageComponent},
  {path:'AdminComponent', component:AdminComponent}


]

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DescriptionComponent,
    HomeComponent,
    HelpComponent,
    LoginComponent,
    AdminLoginComponent,
    AdminComponent,
    GuidepageComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatAutocompleteModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule, 
    // MatInput,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
