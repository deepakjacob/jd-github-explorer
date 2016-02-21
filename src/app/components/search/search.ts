import { Component, Output, EventEmitter } from 'angular2/core';
import { Control } from 'angular2/common';


@Component({
    selector: 'search',
    styles: [require('./search.scss')],
    template: require('./search.html'),
    providers: [],
    directives: [],
    pipes: []
})
export class Search {

    repoName = new Control();

    @Output()
    repoNameChanged: EventEmitter<string> = new EventEmitter<string>();

    
    constructor() {
        this.repoName.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(name => this.bubbleEvent(name));
    }

    bubbleEvent(name) {
        console.log("Emitting %s", name);
        this.repoNameChanged.emit(name);
    }

}
