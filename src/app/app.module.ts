import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoService } from './flickrPhotos/photo.service';
import { AppComponent } from './app.component';
import { FlickrPhotosComponent } from './flickrPhotos/flickrPhotos.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    FlickrPhotosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule
  ],
  providers: [ PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
