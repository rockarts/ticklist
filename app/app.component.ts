import { Component } from '@angular/core';
import { RoutesComponent } from './routes.component'

@Component({
    selector: 'ticklist',
    template: `<h1>My First Angular 2 App</h1>
    <routes></routes>`,
    directives:[RoutesComponent]   
    
})
export class AppComponent { 
    route = { 
        "id" : 1,
        "name": "Edith Cavell East Ridge",
        "area": "Jasper",
        "date": new Date() ,
        "about": "",
        "grade" : "III, 5.4",
        "beta" : "http://www.soistheman.com/diary/page.php?id=mt-edith-cavell&page=1",
        "image" : "/app/images/edithcavell.jpg",
        "imageDescription" : "Edith Cavell",
        "latitude": "52.682055",
        "longitude": "-118.069175"
    }

}
