import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'material-demo';
    notifications = 0;
    showSpinner = false;

    loadData() {
        this.showSpinner = true;
        setTimeout(() => {
            this.showSpinner = false;
        }, 5000);
    }

    opened = false;

    log(state) {
        console.log(state);
    }

    logChange(index) {
        console.log(index);
    }

    selectedValue: string;

    options: string[] = ['Angular', 'React', 'Vue'];
    objectOptions = [
        {name: 'Angular'},
        {name: 'AngularMaterial'},
        {name: 'React'},
        {name: 'Vue'}
    ];
    displayFn(subject) {
        return subject ? subject.name : undefined;
    }
}
