import { Injectable, Input} from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateCommunityService {
    @Input()
    communityDetails = [];
    constructor(private _http: Http) { }

    getTemplates() {
        return this._http.get('/api/v1/communitytemplates').map(res => res.json());
    }

    postNewcommunityDetails(val, domainName) {
        const headers = new Headers(
            {'Content-Type': 'application/json', 'Access-Control-Allow-Methods': ' POST ' });
            const options = new RequestOptions({ headers: headers });
            return this._http.post('api/v1/communitytemplates/' + domainName, val).map(() =>
            console.log('New community details posted', val));
        }
    }
