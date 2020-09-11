import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DataService} from '../dataService/data.service';
import {Http} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './loginguide.component.html',
  styleUrls: ['./loginguide.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http:Http,
    public activatedRoute:ActivatedRoute,
    public dataService:DataService,
    public router : Router,public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

   }

   login={"email":"","mdp":""}
   loginF(){
    this.dataService.loginguide(this.login)
    .then((res)=>{
      this.router.navigate(['/GuidePage']);
      console.log("u r logged in !");
    })
    .catch((err)=>{
      this.router.navigate(['/']);
      console.log("u r not logged in ! ");
      console.log(err);
  
  
    })
  }

  ngOnInit(): void {
  }
 
}
