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

  search(searchTerm: HTMLInputElement){
    this._photoService.getPhotosWithTag(searchTerm.value)
        .subscribe(res => { this.photoList = res });
  }
}


