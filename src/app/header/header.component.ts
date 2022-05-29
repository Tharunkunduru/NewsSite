import {Component, OnInit, SimpleChanges} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private routes:Router) {
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  submit(form: NgForm) {
    this.routes.navigate(['/search'],
      { queryParams: { key: form.form.value.search },fragment:'results' });
    form.reset();
  }
}
