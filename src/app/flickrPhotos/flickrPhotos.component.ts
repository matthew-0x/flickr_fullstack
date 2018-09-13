import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'flickr-photos',
  templateUrl: './flickrPhotos.component.html',
  styleUrls: ['./flickrPhotos.component.css']
})
export class FlickrPhotosComponent implements OnInit{

  public photoList;

  constructor(private _photoService: PhotoService) {
  }

  ngOnInit(){
    this._photoService.getPhotos()
      .subscribe( res => this.photoList = res );
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


