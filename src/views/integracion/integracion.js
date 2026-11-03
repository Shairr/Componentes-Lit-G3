import { LitElement, html, css } from "lit";
import "../../externos/equipo-4/register.js";
import "../home/table.js";

class Integracion extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 800px;
        margin: 20px auto;
        padding: 0 16px;
        font-family: var(--fuente-base, system-ui, sans-serif);
      }
      h1 {
        text-align: center;
        color: var(--color-marca, #6f4e37);
        margin-bottom: 24px;
      }
    `;
  }

  constructor() {
    super();
    this.lista = [];
  }

  agregarProducto(event) {
    const producto = event.detail;

    const precio = Number(producto.precio) || 0;
    const cantidad = 1;

    const fila = {
      nombre: producto.titulo,
      origen: producto.descripcion,
      precio: precio,
      cantidad: cantidad,
      total: precio * cantidad,
    };

    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <h1>Integración: Formulario Equipo 4 + Tabla Café Raíz</h1>

      <wc-form-register
        @product-register="${this.agregarProducto}"
      ></wc-form-register>

      <wc-table .list="${this.lista}"></wc-table>
    `;
  }
}

customElements.define("wc-integracion", Integracion);
