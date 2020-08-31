import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'application',
        title    : 'Application',
        translate: 'APP.TITLE',
        type     : 'group',
        icon     : 'home',
        children : [
            {
                
                id: 'dashboard',
                title: 'Dashboard',
                translate: 'APP.DASHBOARD.TITLE',
                type: 'item',
                url: '/dashboard',
                icon: 'dashboard',
                badge: {
                    title: '15',
                    bg: '#F44336',
                    fg: '#FFFFFF'
                }
            }                
        ]
    }
];
