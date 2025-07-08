import { LitElement, html } from 'lit';
import {customElement } from 'lit/decorators.js'

@customElement('chat-element')
export class ChatElement extends LitElement {
    render() {
        return html`
        <h1>HELLO</h1>
        <p>I will write a very long paragraph to see where the text lands in all this</p>
        <p>sometimes you gotta write a lot just to see where everything ends up because you don't trust the system</p>
        <h2>TRUST</h2>
        <p>I don't got async</p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "chat-element": ChatElement;
    }
}