import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'

@Injectable({
  providedIn:'root'})
export class imageService{

  apiURL: string = "http://localhost:8080/test";
  apiURLImage: string = "http://localhost:8080/get";
  apiURLdel: string = "http://localhost:8080/";



  constructor(private http:HttpClient){}

  getImages(){
    return this.http.get(this.apiURL)};


  //this method gets an image based off name of image in db
  getImage(name:string){
    return this.http.get(this.apiURLImage+"/"+name,
      {responseType: "blob"})}


  deleteImage(name:string){
    return this.http.delete(this.apiURLdel+name)
  }


}
