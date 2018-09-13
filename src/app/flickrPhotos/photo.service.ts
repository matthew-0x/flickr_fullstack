import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class PhotoService {

  private url = "http://localhost:4000/api/photos";
  
  constructor(private http: HttpClient) {
  }

  getPhotos() {
    return this.http.get(this.url)
    //.pipe(map(result => { result.url })
    //);
  }
}


