import { Component, OnInit } from '@angular/core';

import { Params, RouterModule, Router, Routes} from '@angular/router';
 import {GetCommunity} from '../manage-community/manage-community.service';

@Component({
  selector: 'calvin-community-profile',
  templateUrl: './community-profile.component.html',
  styleUrls: ['./community-profile.component.css'],
   providers: [GetCommunity]
})
export class CommunityProfileComponent implements OnInit {
  samples = [];
  url: string;
  param = [];
  ans;
  constructor(private router: Router, private comm: GetCommunity) {
    this.comm.getCommunity().subscribe(res => { this.samples = res; })
  }

 ngOnInit() {
    this.url = this.router.url;
    this.param = this.url.split('/');
    this.ans = this.param[this.param.length - 1];
  }

}
