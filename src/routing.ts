import { Router } from '@vaadin/router';

const outlet = document.getElementById('outlet');
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
    {
        path: '/pastebin-overlay',
        component: 'pastebin-overlay',
        action: async () => {
            await import('./routes/screens.ts');
        },
    }
]);