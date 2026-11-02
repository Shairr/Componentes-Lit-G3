import { LitElement, html, css } from "lit-element";
import "../home/table";
import "../../externos/equipo-4/register";

class Integracion extends LitElement {
    static get properties() {
        return {
            list: { type: Array },
        };
    }

    //Estilos
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
        this.list = [];
    }

    //Convierte el detail del Equipo 4 al formato de nuestra tabla
    agregar(event) {
        const producto = event.detail;
        const precio = Number(producto.precio);
        const cantidad = 1;
        let fila = {
            nombre: producto.titulo,
            origen: producto.descripcion,
            precio: precio,
            cantidad: cantidad,
            total: precio * cantidad,
        };

        this.list = [...this.list, fila];
    }



    render() {
        return html`
      <h1>Integración: Formulario Equipo 4 + Tabla Café Raíz</h1>

      <!-- Componente del Equipo 4 escuchando su evento específico -->
      <wc-form-register @product-register="${this.agregar}"></wc-form-register>
      
      <!-- Nuestra tabla propia recibiendo la lista por propiedad -->
      <wc-table .list="${this.list}"></wc-table>
    `;
    }
}

window.customElements.define("wc-integracion", Integracion);
