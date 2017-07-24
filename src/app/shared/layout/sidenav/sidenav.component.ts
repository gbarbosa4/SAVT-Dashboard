import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidenavService } from '../../services/sidenav.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
    constructor(
        private router: Router,
        private sidenavService: SidenavService
    ) { }

    ngOnInit() { }

    goToSensors() {
        this.sidenavService.closeSidenav();
        //this.router.navigate(['/sensorsList']);
    }

    goToImages() {
        this.sidenavService.closeSidenav();
        //this.router.navigate(['/images']);
    }

    goToKmlGenerator() {
        this.sidenavService.closeSidenav();
        this.router.navigate(['/']);
    }

    goToAbout() {
        this.sidenavService.closeSidenav();
        //this.router.navigate(['/about']);
    }
}