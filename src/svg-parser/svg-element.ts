import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("svg-element")
export class SVGElement extends LitElement {
  static properties = {
    path: { type: String },
    colorStart: { type: String },
    colorEnd: { type: String },
    speed: { type: String },
  }
  @property({ type: String }) path;
  @property({ type: String }) strokeWidth;
  @property({ type: String }) colorStart;
  @property({ type: String }) colorEnd;
  @property({ type: String }) speed;
  @property({type: Number}) randomSpeed;

  constructor(){
    super();
    this.path = "";
    this.strokeWidth = "";
    this.colorStart = 'white';
    this.colorEnd = 'black';
    this.speed = "10";
    this.randomSpeed = +this.speed * Math.floor(Math.random() * 10);
  }


   render(){
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
      <defs>
          <radialGradient id="gradient" r="100%" cx="100%" cy="100%" fx="0%" fy="0%">
              <stop offset="10%" stop-color=${this.colorStart} />
              <stop offset="90%" stop-color= ${this.colorEnd} />
              <animate attributeName="fx" dur=${this.randomSpeed}s values="0%;80%;80%;0%" repeatCount="indefinite" />
              <animate attributeName="fy" dur=${this.randomSpeed}s values="80%;0%;0%;80%" repeatCount="indefinite" />
              <animate attributeName="cx" dur=${this.speed}s values="20%;80%;20%" repeatCount="indefinite" />
              <animate attributeName="cy" dur=${this.speed}s values="20%;80%;20%" repeatCount="indefinite" />
          </radialGradient>
      </defs>
        <path
          d=${this.path}
          style="fill:none;stroke:url(#gradient);stroke-width:${this.strokeWidth};"
        />
      </svg>
  `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "svg-element": SVGElement;
  }
}