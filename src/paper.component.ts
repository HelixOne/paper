import { Component, OnInit } from '@angular/core';
import { PaperService } from './paper.service';

@Component({
    selector: 'paper',
    templateUrl: './paper.html',
    styleUrls: ['./paper.scss'],
})
export class PaperComponent implements OnInit {
    constructor(private writeService: PaperService) {}

    ngOnInit() {
        this.watchCommands();
    }
    command(command) {
        if (command && this.writeService[command]) {
            this.writeService[command]();
        } else {
            console.error(`Command "${command}" does not exist`);
        }
        return false;
    }
    watchCommands() {
        this.writeService.commands$.subscribe(command => {
            console.log(command);
        });
    }
}
