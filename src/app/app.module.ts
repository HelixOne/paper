import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaperModule } from './paper/paper.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, PaperModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
