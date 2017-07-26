import { Component } from '@angular/core';

@Component({
    selector: 'learn',
    // templateUrl: './learn.component.html',
    template: `<h1>I am an inline template</h1>
    <h3>Super apps with Angular and Node.js </h3>`,
    styles: [
        `h1 { color: green }
         h3 { color: deeppink }
        `,
        
        `h1 {
            background: lightblue;    
        }`
    ]
})
export class LearnComponent {

}