import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../svg-parser/svg-import";

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