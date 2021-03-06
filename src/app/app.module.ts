import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { AppHighlightDirective } from './app-highlight.directive';
import { VotesComponent } from './votes/votes.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { HighlightDirective } from './highlight.directive'
@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    DateCountPipe,
    QuoteFormComponent,
    TimeAgoPipe,
    AppHighlightDirective,
    VotesComponent,
    HighlightDirective,
    StrikethroughDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
