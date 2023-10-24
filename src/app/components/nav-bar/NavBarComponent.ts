import { Component } from '@angular/core';
import { DatasharingserviceService } from '../home/datasharingservice.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    constructor(private dataSharingService: DatasharingserviceService,
        private router: Router
    ) { }
    searchText: string = '';

    searchIt(searchText: string) {
        this.dataSharingService.setSearchText(this.searchText);
        this.router.navigateByUrl('/home');
    }
}
