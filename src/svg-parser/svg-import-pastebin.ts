import { css, LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./svg-element";

@customElement("svg-import-pastebin")
export class SVGImport extends LitElement {
  @property({ attribute: false })
  speed = "30";
  path  = "";
  strokeWidth = "5px";

  @property() pastebinID ='';
  @property() colorStart = "rgb(244, 177, 79)";
  @property() colorEnd = "rgb(169, 91, 234)";

  connectedCallback() {
    super.connectedCallback();
    this.updateURLParams();
    this.fetchPathData();
  }
  

  updateURLParams() {
    const params = new URLSearchParams(window.location.search);
    const pastebinID= params.get('pastebin-id') || '';
    this.pastebinID = `https://pastebin.com/raw/${pastebinID}`;
    this.colorStart = params.get('color-start') || 'rgb(244, 177, 79)';
    this.colorEnd = params.get('color-end') || 'rgb(169, 91, 234)';
  }

  async fetchPathData() {
    const pathData = await this.gamesPastebinSVG(this.pastebinID);
    if (pathData) {
      this.path = pathData;
      this.requestUpdate()
    }
  }
   
  constructor() {
    super();
    this.pastebinID;
    this.colorStart;
    this.colorEnd;
  }
  
  async gamesPastebinSVG (url: string) {
    try {
            const pathData = await fetch(`${url}`)
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
