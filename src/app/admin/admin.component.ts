import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataService/data.service';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  guides:any[];
  guidedetails={"firstName":"","lastName":"","email":"","mdp":"","link":"","dispo":"","motiv":""};



  constructor(public activatedRoute:ActivatedRoute,public dataService:DataService,
    public translate: TranslateService ,public router : Router) {
    this.displayAll();
    console.log(this.guides);

    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

   }

  ngOnInit(): void {
  }
  Accepter(){
    this.dataService.accept(this.guidedetails).then((res)=>{
      this.router.navigate(['/AdminComponent']);
      console.log("you're accepted !");
    })
    .catch((err)=>{
      this.router.navigate(['/AdminComponent']);
      console.log("problem ! ");
      console.log(err);
  
  })}
  Refuser(){
    this.dataService.refuse(this.guidedetails).subscribe();

  }

  displayAll(){
    this.dataService.getData().subscribe(guides => this.guides=guides);
    console.log(this.guides);

  }
  details(guide){
    console.log(guide);
    this.guidedetails=guide;
  }


}
