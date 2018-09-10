import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    HttpModule,
    RouterModule.forRoot([
      { path: '**', component: AppComponent },


    ]),
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
