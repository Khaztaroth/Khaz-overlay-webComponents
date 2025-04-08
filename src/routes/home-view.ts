import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement('home-view')
export class HomeView extends LitElement {
    @state()
    private pastebinID: string = '';
    @state()
    private colorStart: string = '';
    @state()
    private colorEnd: string = '';

    private handeInputChange(event: Event, field: 'pastebinID' | 'colorStart' | 'colorEnd') {
        const target = event.target as HTMLInputElement;
        this[field] = target.value;
        }


    render() {
        return html`
            <h1>Home</h1>
            <a href="/art"><p>ART</p></a>
            <a href="/games"><p>GAMES</p></a>
            <div>
                <input
                    type="text"
                    placeholder="Pastebin ID"
                    @input=${(e: Event) => this.handeInputChange(e, 'pastebinID')}
                />
                <input
                    type="text"
                    placeholder="Color Start"
                    @input=${(e: Event) => this.handeInputChange(e, 'colorStart')}
                />
                <input
                    type="text"
                    placeholder="Color End"
                    @input=${(e: Event) => this.handeInputChange(e, 'colorEnd')}
                />
                <a href="/pastebin-overlay?pastebin-id=${this.pastebinID}${this.colorStart ? `&color-start=${this.colorStart}` : ''}${this.colorEnd ? `&color-end=${this.colorEnd}` : ''}">
                    <button ?disabled=${!this.pastebinID} type="submit">Import SVG from Pastebin</button>>
                </a>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'home-view': HomeView;
    }
}