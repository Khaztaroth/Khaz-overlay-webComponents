import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./svg-element";

@customElement("svg-import")
export class SVGImport extends LitElement {
  @property({ attribute: false })
  colorStart = 'rgb(244, 177, 79)';
  colorEnd = 'rgb(169, 91, 234)';
  speed = "30";
  path  = "";
  strokeWidth = "5px";

  @property({ type: String }) rawSVG;

  constructor() {
    super();
    this.rawSVG = "";
  }
  
  connectedCallback() {
    super.connectedCallback();
    this.extractPathFromSVG();
  }
  
  
  extractPathFromSVG() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.rawSVG, 'image/svg+xml');
    const pathElement = doc.querySelectorAll('path');
    if (pathElement.length > 0) {
      this.path = pathElement[0].getAttribute('d') || this.path;
    }
    if (pathElement.length > 1) {
      pathElement.forEach(element => {
        this.path = this.path + element.getAttribute('d');
      });
    }
  }

  render() {
    return html`
          <svg-element colorStart=${this.colorStart} colorEnd=${this.colorEnd} speed=${this.speed} path=${this.path} strokeWidth=${this.strokeWidth}></svg-element>
    `;
  }

  static styles = css`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }
    `
}

declare global {
  interface HTMLElementTagNameMap {
    "svg-import": SVGImport;
  }
}
