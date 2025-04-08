import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../svg-parser/svg-import";
import "../svg-parser/svg-import-pastebin";
import gamesSVG from "../assets/game_rectangles.svg?raw";

const params = new URLSearchParams(window.location.search);
const pastebinID = params.get('pastebin-id') || '';
const colorStart = params.get('color-start') || 'rgb(244, 177, 79)';
const colorEnd = params.get('color-end') || 'rgb(169, 91, 234)';

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

@customElement('game-view-pastebin')
export class GameRectanglesPastebin extends LitElement {

    render() {
        return html`
            <svg-import-pastebin pastebinURL="https://pastebin.com/raw/${pastebinID}" colorStart=${colorStart} colorEnd=${colorEnd}></svg-import-pastebin>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "game-view-pastebin": GameRectanglesPastebin;
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