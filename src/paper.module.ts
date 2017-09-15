import { NgModule } from '@angular/core';

import { PaperComponent } from './paper.component';
import { PaperService } from './paper.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [PaperComponent],
    providers: [PaperService],
})
export class PaperModule {}
