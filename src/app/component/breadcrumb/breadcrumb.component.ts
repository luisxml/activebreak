import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  pageTitle: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  )
  {
      this.getDataRoute().subscribe( data => {
      this.pageTitle = data.title;
      this.title.setTitle('Active Breaks');
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.pageTitle
      };
      this.meta.updateTag( metaTag );
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data )
    );
  }

}
