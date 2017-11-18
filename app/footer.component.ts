import { Component } from 'angular2/core'

@Component({
    selector: 'footer',
    template: '<span class="text-muted">Thanks for visiting!</span>',
    host: {'class' : 'footer navbar-fixed-bottom'}
})

export class FooterComponent {
    title: string = "footer"
    footer;

 }