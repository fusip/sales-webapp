import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent
{
    apps: any[];

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        
        this.apps = [{
            id   : '2e5d90a5-7883-4177-975a-624f55874b2c',
            name : 'Template App',
            description: 'Starter template for apps'
        }];
    }
}
