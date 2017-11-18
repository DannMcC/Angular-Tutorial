import { Component } from 'angular2/core'

@Component({
    selector: 'footer',
    template: `
    <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div class="copyright">
                        © 2017, Dan McCune, All rights reserved
                    </div>
                </div>
            </div>
        </div>`,
    host: {'class' : 'footer navbar-fixed-bottom'}
})

export class FooterComponent {
    title: string = "footer"
    footer;

 }