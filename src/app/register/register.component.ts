import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../dataService/data.service';
import {Md5} from 'ts-md5/dist/md5';
import {TranslateService} from '@ngx-translate/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  selectedFile: File =null;
  myfile;
  message: string;


//Gets called when the user selects an image
public onFileChanged(event) {
  //Select File
  this.selectedFile = event.target.files[0];
}

public onUpload(){
  if (this.selectedFile != null){
    this.dataService.onUpload(this.selectedFile).subscribe((response) => {
      try {
        this.myfile=response;
      } catch (error) {
        console.log(error);
      }
    }
    );
  }else{
    console.log('no file !')
  }
 
}

  myControl = new FormControl();
  places: string[] = ['Ain drahem', 'Bizert', 'Djerba','Tabarka'];
  filteredPlaces: Observable<string[]>;
  guides:any[];
  guide={"firstName":"","lastName":"","email":"","mdp":"","link":"","dispo":"","motiv":""};
  onSubmit(f: NgForm){
   // console.log(f.value);
  }
  constructor(public dataService:DataService,public translate: TranslateService) { 
    
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

  }

  ngOnInit(): void {
    this.filteredPlaces = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.places.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  addFct(){
    const md5 = new Md5();
    
    this.guide.mdp= md5.appendStr(this.guide.mdp).end() as string;
    console.log(this.guide);
    this.dataService.addData(this.guide).subscribe((res :Response) => {

      // You can access status:
      console.log(res.status);
  
    });
  }




}
