import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App {{hello.world}}</h1>'
})
export class AppComponent implements OnInit {

    public hello: {
        world: string
    };

    constructor() {
        this.hello = {
            world: "ciao"
        };
    }

    public ngOnInit() {
        setInterval(async () => {
            this.hello.world = await this.getTime();
        }, 1000);
    }

    private getTime(): Promise<string> {
        return Promise.resolve(new Date().getTime() + "");
    }
}
