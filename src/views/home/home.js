import { LitElement, html, css } from "lit-element";
import "./table";
import "./register";

class Home extends LitElement {
  static get properties() {
    return {
      cafeList: { type: Array },
    };
  }

  constructor() {
    super();
    this.cafeList = [];
  }

  addList(event) {
    let newList = Object.assign([], this.cafeList);
    newList.push(event.detail);
    this.cafeList = newList;
  }
  render() {
    return html`
      <wc-register @cafeRegister="${this.addList}"></wc-register
      ><wc-table .list="${this.cafeList}"></wc-table>
    `;
  }
}

window.customElements.define("wc-home", Home);
