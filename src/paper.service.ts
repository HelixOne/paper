import {
    Component,
    OnInit,
    Injectable,
    Inject,
    ResolvedReflectiveFactory,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { DOCUMENT } from '@angular/platform-browser';
import { PlatformRef } from '@angular/core';
import { MessageBus } from '@angular/platform-webworker';

@Injectable()
export class PaperService {
    commands$: Observable<any>;
    private observer: Observer<any>;

    constructor(@Inject(DOCUMENT) private document) {
        this.commands$ = Observable.create((observer: Observer<any>) => {
            this.observer = observer;
        });
    }
    blockquote() {
        this.execCommand('formatBlock', '<BLOCKQUOTE>');
    }
    bold() {
        this.execCommand('bold');
    }
    copy() {
        this.execCommand('copy');
    }
    heading1() {
        this.execCommand('formatBlock', '<H1>');
    }
    heading2() {
        this.execCommand('formatBlock', '<H2>');
    }
    heading3() {
        this.execCommand('formatBlock', '<H3>');
    }
    insertHtml(value) {
        this.execCommand('insertHTML', value);
    }
    insertText(value) {
        this.execCommand('insertText', value);
    }
    insertOrderedList() {
        this.execCommand('insertOrderedList');
    }
    insertUnorderedList() {
        this.execCommand('insertUnorderedList');
    }
    italic() {
        this.execCommand('italic');
    }
    line() {
        this.execCommand('insertHorizontalRule');
    }
    paste() {
        this.execCommand('paste');
    }
    paragraph() {
        this.execCommand('formatBlock', '<P>');
    }
    pre() {
        this.execCommand('formatBlock', '<PRE>');
    }
    strikeThrough() {
        this.execCommand('strikeThrough');
    }
    underline() {
        this.execCommand('underline');
    }
    execCommand(command, value?) {
        this.document.execCommand(command, false, value);
        this.observer.next(command);
    }
}
