import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginRegistrationComponent } from 'app/login-registration/login-registration.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  content:LoginRegistrationComponent;
  constructor(private modalService: NgbModal) { }
  
  open(content) {
      const modalRef = this.modalService.open(content);
      modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
  }

}
