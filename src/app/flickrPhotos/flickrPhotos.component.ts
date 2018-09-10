import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'flickr-photos',
  templateUrl: './flickrPhotos.component.html',
  styleUrls: ['./flickrPhotos.component.css']
})
export class FlickrPhotosComponent {

  photoList : any;
  private url = "http://localhost:4000/api/photos";

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
         this.photoList = response.json();
      })

  }

  // createPost(input: HTMLInputElement){
  //   let post = { title: input.value };
  //   input.value ='';

  //   this.http.post(this.url, JSON.stringify(post))
  //       .subscribe(response => {
  //          post['id']= response.json().id;
  //          this.PhotoList.splice(0,0,post);
  //       });
  // }
}


