import {Component} from 'angular2/core'
import { AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{ title }}
    <ul>
        <li class="list-group-item list-group-item-action" *ngFor="#author of authors">
        {{ author }}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent {
    title: string = "The Authors of the courses"
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }


}
