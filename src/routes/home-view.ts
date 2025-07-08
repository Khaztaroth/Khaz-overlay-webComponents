import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <h1>Home</h1>
            <a href="/art"><p>ART</p></a>
            <a href="/games"><p>GAMES</p></a>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'home-view': HomeView;
    }
}