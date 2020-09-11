import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

interface Language {
  language: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // lang: Language[] = [
  //   {language: 'lang-0', viewValue: 'Français'},
  //   {language: 'lang-1', viewValue: 'English'},
  //   {language: 'lang-2', viewValue: 'العربية'}
  // ];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   
   }

  ngOnInit(): void {
  }

}
