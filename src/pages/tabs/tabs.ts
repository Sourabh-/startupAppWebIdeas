import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { StartupPage } from '../startup/startup';
import { AppPage } from '../app/app';
import { WebsitePage } from '../website/website';

@Component({
  selector: 'page-tab',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1 = StartupPage;
  tab2 = AppPage;
  tab3 = WebsitePage;

  constructor() {}

}
