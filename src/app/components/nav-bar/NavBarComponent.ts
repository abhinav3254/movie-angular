import { Component } from '@angular/core';
import { DatasharingserviceService } from '../home/datasharingservice.service';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    constructor(private dataSharingService: DatasharingserviceService) { }
    searchText: string = '';

    searchIt(searchText: string) {
        this.dataSharingService.setSearchText(this.searchText);
    }
}
