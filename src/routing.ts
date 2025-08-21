import { Router } from '@vaadin/router';

const outlet = document.querySelector('body');
const router = new Router(outlet);

router.setRoutes([
    {
        path: '/',
        component: 'home-view',
        action: async () => {
            await import('./routes/home-view.ts');
        },
    },
    {
        path: '/games',
        component: 'game-view',
        action: async () => {
            await import('./routes/screens.ts');
        },
    },
    {
        path: '/art',
        component: 'art-view',
        action: async () => {
            await import('./routes/screens.ts');
        },
    },
]);