import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightJsModule } from 'ngx-highlight-js';
import { TimeAgoPipe } from './time-ago.pipe';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    QuoteFormComponent,
    TimeAgoPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
