import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SAWApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StartupPage } from '../pages/startup/startup';
import { AppPage } from '../pages/app/app';
import { WebsitePage } from '../pages/website/website';

@NgModule({
  declarations: [
    SAWApp,
    TabsPage,
    StartupPage,
    AppPage,
    WebsitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SAWApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SAWApp,
    TabsPage,
    StartupPage,
    AppPage,
    WebsitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
