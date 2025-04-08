import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../svg-parser/svg-import";
import "../svg-parser/svg-import-pastebin";
import gamesSVG from "../assets/game_rectangles.svg?raw";

@customElement('game-view')
export class GameRectangles extends LitElement {
    render() {
        return html`
            <svg-import rawSVG=${gamesSVG}></svg-import>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "game-view": GameRectangles;
    }
}

@customElement('pastebin-overlay')
export class PastebinOverlay extends LitElement {

    render() {
        return html`
            <svg-import-pastebin></svg-import-pastebin>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "pastebin-overlay": PastebinOverlay;
    }
}

import artSVG from "../assets/art_rectangles.svg?raw";

@customElement('art-view')
export class ArtRectangles extends LitElement {
    render() {
        return html`
            <svg-import rawSVG=${artSVG}></svg-import>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "art-view": ArtRectangles;
    }
}