import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tabs',
  templateUrl: './form-tabs.component.html',
  styleUrls: ['./form-tabs.component.css']
})
export class FormTabsComponent implements OnInit {

  tabs: string[] = ['Первая', 'Вторая']

  constructor() { }

  ngOnInit(): void {
  }

}
