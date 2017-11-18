import {Component} from 'angular2/core';
import { CoursesComponent } from './courses.compoent';
import { AuthorComponent } from './author.component';
import { FooterComponent } from './footer.component';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <h1>Hello Angular</h1>
            </div>
        </div>
    </nav>
    <courses></courses>
    <authors></authors>
    <footer></footer>`,
    directives: [CoursesComponent, AuthorComponent, FooterComponent],
})
export class AppComponent { }