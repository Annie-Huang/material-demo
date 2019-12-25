import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    myControl = new FormControl();
    filterOptions: Observable<string[]>;
    ngOnInit(): void {
        this.filterOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    minDate = new Date();
    maxDate = new Date(2020, 3, 10); // month start from 0
    dateFilter = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    }
}
