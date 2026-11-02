import { LitElement, html, css } from "lit-element";

class Table extends LitElement {
  static get properties() {
    return {
      list: {
        type: Array,
      },
    };
  }
  constructor() {
    super();
    this.list = [];
  }

  // Estilos con la paleta de marca Café Raíz
  static get styles() {
    return css`
      :host {
        display: block;
        font-family: var(--fuente-base, system-ui, sans-serif);
      }
      .contenedor-tabla {
        max-width: 650px;
        margin: 20px auto;
        background: var(--color-superficie, #ffffff);
        border: 1px solid rgba(111, 78, 55, 0.15);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 16px -2px rgba(44, 26, 14, 0.05);
      }
      h2 {
        background-color: var(--color-marca, #6f4e37);
        color: #ffffff;
        margin: 0;
        padding: 16px 20px;
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
      }
      th {
        background-color: #f5eee8;
        color: var(--color-texto, #2c1a0e);
        font-weight: 700;
        padding: 12px 16px;
        font-size: 0.9rem;
        border-bottom: 2px solid rgba(111, 78, 55, 0.15);
      }
      td {
        padding: 12px 16px;
        font-size: 0.92rem;
        color: var(--color-texto, #2c1a0e);
        border-bottom: 1px solid #f0eae4;
      }
      tr:last-child td {
        border-bottom: none;
      }
      tr:hover td {
        background-color: #faf5f0;
      }
      .precio {
        font-weight: 700;
        color: var(--color-acento, #c68642);
      }
      .vacio {
        padding: 24px;
        text-align: center;
        color: var(--color-texto-suave, #6a6460);
        font-style: italic;
      }
    `;
  }

  render() {
    return html`
     <div class="contenedor-tabla">
      <h2>Total productos registrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Región de origen</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${this.list.map((cafe) => {
      return html`
            <tr>
              <td>${cafe.nombre}</td>
              <td>${cafe.origen}</td>
              <td class="precio">
              $${Number(cafe.precio !== undefined ? cafe.precio : (cafe.age || 0)).toFixed(2)}
              </td>
              <td>${cafe.cantidad}</td>
              <td>
              $${Number(cafe.total !== undefined ? cafe.total : (cafe.total || 0)).toFixed(2)}  
          </td>
            </tr>
          `})}
        </tbody>
      </table>
      </div>
    `;
  }
}
window.customElements.define("wc-table", Table);