import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { filter, map, mergeMap } from 'rxjs/operators'

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
  pageTitle: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(routes => {
        while (route.firstChild) {
          route = route.firstChild;
          return route;
        }
      }),
      filter(routes => route.outlet === 'primary'),
      mergeMap(routes => route.data)
    ).subscribe(data =>
      this.pageTitle = data.title
    );
  }

  ngOnInit() {
  }

}
