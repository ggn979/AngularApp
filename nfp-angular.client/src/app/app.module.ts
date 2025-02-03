import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './child/customer-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { HighlightsDirective } from './directives/highlights.directive';
import { ContentProjectionComponent } from './child/content-projection/content-projection.component';
import { CustomPipePipe } from './child/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    HighlightsDirective,
    ContentProjectionComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
