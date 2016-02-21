import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
//import { Http } from 'angular2/http';

import { Card } from '../card/card';
import { Search } from '../search/search';

import { Api } from '../../services/api/api';
import { GhRepo, Item } from '../../model/repo';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES, Card, Search],
    pipes: [],
    styles: [require('./home.scss')],
    template: require('./home.html')
})
export class Home{

    items: Item[] = [];

    constructor(private api: Api) {
    }

    repoNameChangeHandler(repoName: string) {
        console.log("@Home - repo name from search component %s ", repoName);
        this.api.search(repoName).subscribe(values => this.setItems(values));
    }

    setItems(repo: GhRepo) {
        this.items = repo.items;
    }

}
