import { LitElement, css, html } from "lit";

class Register extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-bottom: 2rem;
    }

    form {
      display: grid;
      gap: 1rem;
      max-width: 32rem;
    }

    label {
      display: grid;
      gap: 0.35rem;
    }

    input,
    textarea,
    button {
      font: inherit;
      padding: 0.6rem;
    }

    textarea {
      min-height: 5rem;
      resize: vertical;
    }
  `;

  register(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const producto = {
      foto: formData.get("foto").trim(),
      titulo: formData.get("titulo").trim(),
      descripcion: formData.get("descripcion").trim(),
      precio: Number(formData.get("precio")),
    };

    this.dispatchEvent(
      new CustomEvent("product-register", {
        detail: producto,
        bubbles: true,
        composed: true,
      }),
    );
    form.reset();
  }

  render() {
    return html`
      <form @submit=${this.register}>
        <fieldset>
          <legend>Registrar producto</legend>
          <label>
            Foto (URL, opcional)
            <input type="url" name="foto" />
          </label>
          <label>
            Título
            <input type="text" name="titulo" required />
          </label>
          <label>
            Descripción
            <textarea name="descripcion" required></textarea>
          </label>
          <label>
            Precio
            <input type="number" name="precio" min="0" step="0.01" required />
          </label>
          <button type="submit">Registrar producto</button>
        </fieldset>
      </form>
    `;
  }
}

customElements.define("wc-form-register", Register);
