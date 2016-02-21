import {Injectable} from 'angular2/core';
import { Http, RequestOptions, RequestMethod } from 'angular2/http';

@Injectable()
export class Api {
    private static GH_URL: string = 'https://api.github.com/search/repositories';

    constructor(public http: Http) {
    }

    search(repoName: string, debounceDuration = 400) {
        return this.rawSearch(repoName);
    }

    rawSearch(repoName: string) {
        var options = new RequestOptions({
            method: RequestMethod.Get,
            search: 'q=' + repoName
        });
        return this.http.get(Api.GH_URL, options).map(res => this.toJson(res));
    }

    toJson(res) {
        return res.json();
    }
}
