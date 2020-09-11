import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import  {HttpClient, HttpRequest, HttpHeaders, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:8080';

  constructor(public http:Http,  private httpClient: HttpClient) { }

  addData(guide){
    return this.http.post('http://localhost:8080/registration/guide',guide).pipe(map(res => res.json()));

   }
   getData(){
    return this.http.get('http://localhost:8080/registration/show').pipe(map(res => res.json()));
   }

  // for upload
retrievedImage: any;
base64Data: any;
retrieveResonse: any;selectedFile: File;

imageName: any;


//Gets called when the user clicks on submit to upload the image
onUpload(selectedFile : File) {
  console.log(selectedFile);
  
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', selectedFile, selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
  return this.httpClient.post('http://localhost:8080/registration/upload', uploadImageData, { observe: 'response' })
  
}

loginguide(login){
  return new Promise((resolve,reject)=>{
    this.http.post("http://localhost:8080/Login/connectguide",login).toPromise()
    .then(userData=>resolve(userData),err=>reject(err));

  });

}

loginadmin(login){
  return new Promise((resolve,reject)=>{
    this.http.post("http://localhost:8080/Login/connectadmin",login).toPromise()
    .then(userData=>resolve(userData),err=>reject(err));

  });}

  accept(guide){
    return new Promise((resolve,reject)=>{
      this.http.put("http://localhost:8080/Edit/accept",guide).toPromise()
      .then(userData=>resolve(userData),err=>reject(err));
    })
  }
  refuse(guide){
    return this.http.put('http://localhost:8080/Edit/refuse',guide).pipe(map(res => res.json()));

  }
}

