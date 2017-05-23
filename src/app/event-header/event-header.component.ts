import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.css'],
  animations:[
               trigger('state', [
                 state('inactive', style({
                   backgroundColor: '#eee',
                   transform: 'scale(1)'
                 })),
                 state('active',   style({
                   backgroundColor: '#cfd8dc',
                   transform: 'scale(1.1)'
                 })),
                 transition('inactive => active', animate('100ms ease-in')),
                 transition('active => inactive', animate('100ms ease-out'))
               ])
             ]
})
export class EventHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
