import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./svg-element";

@customElement("svg-import-pastebin")
export class SVGImport extends LitElement {
  @property({ attribute: false })
  speed = "30";
  path  = "";
  strokeWidth = "5px";

  @property() pastebinURL;
  @property() colorStart;
  @property() colorEnd;
  
  constructor() {
    super();
    this.pastebinURL = '';
    this.colorStart = '';
    this.colorEnd = '';
  }
  
  async gamesPastebinSVG (url: string) {
    try {
            const pathData = await fetch(`https://corsproxy.io/?url=${url}`)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'image/svg+xml');
                const pathElement = doc.querySelectorAll('path');
                let path = "";
                if (pathElement.length > 0) {
                    pathElement.forEach(element => {
                        path += element.getAttribute('d') || "";
                    });
                }
                return path;
            });
            return pathData;
    } catch (error) {
        console.error("Error fetching SVG:", error);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchPathData();
  }
  
  async fetchPathData() {
    const pathData = await this.gamesPastebinSVG(this.pastebinURL);
    if (pathData) {
      this.path = pathData;
      this.requestUpdate()
    }
  }
  
  render() {
    return html`
      ${this.path ? html`
          <svg-element 
          colorStart=${this.colorStart} 
          colorEnd=${this.colorEnd} 
          speed=${this.speed} 
          path=${this.path} 
          strokeWidth=${this.strokeWidth}>
        </svg-element>
    `
    : html`<p>Loading...</p>`
    }
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
    "svg-import-pastebin": SVGImport;
  }
}
