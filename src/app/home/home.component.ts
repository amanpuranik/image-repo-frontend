import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {imageService} from 'src/app/services/image.service'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';





@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  data:any
  image:any
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName:any;
  progress: number | undefined;
  img: any;
  imageUrl: any;
  file:File | null = null;
  imageFile:any;
  imageNameDel: any

  constructor(private imageData:imageService,
              private httpClient:HttpClient) { }

  ngOnInit(): void {

    console.log(this.image)
   

    this.imageData.getImages().subscribe((results)=>{
     this.data = results
     })
  }


//getting bytes from the image 
getImage(image:string){

  this.imageData.getImage(image).subscribe((data:any)=>{
    this.createImageFromBlob(data);
  })


}
 //creating image from the bytes 
  createImageFromBlob(image: Blob) {
     let reader = new FileReader();
     reader.addEventListener("load", () => {
        this.image = reader.result;
        console.log(this.image)
     }, false);

     if (image) {
        reader.readAsDataURL(image);
        console.log("ok")
     }
  }

  getImage2(){
    this.imageUrl= 'http://localhost:8080/get/' + this.imageName;
    console.log(this.file)
  }

  onFileSelected(event: any){
    console.log(event)
    this.imageFile = event.target.files[0]
  }

  //send post request to MySQL
  uploadImage(){
    const fd = new FormData(); 
    fd.append('imageFile',this.imageFile) //used to be called selectedFile
    this.httpClient.post("http://localhost:8080/upload",fd)
      .subscribe(res=>{
        console.log(res);
        console.log("the process worked")
      })
  }

  //this method is used to delete from mysql
  deleteImage(){
    this.httpClient.delete("http://localhost:8080/"+this.imageNameDel,
    {responseType:'text'})
      .subscribe(res=>{
        console.log(res)
      })

  }


}
