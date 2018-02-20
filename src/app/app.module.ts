import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FilterPipe} from './filter.pipe';
import { HttpModule } from '@angular/http'
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, FilterPipe ],
  bootstrap:    [ AppComponent ],
  providers:[AppComponent]
})
export class AppModule { }