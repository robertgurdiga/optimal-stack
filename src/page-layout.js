customElements.define(
  "page-layout",

  class extends HTMLElement {
    shadowRoot = this.attachShadow({ mode: "open" });
    template = "/src/page-layout.html";

    connectedCallback() {
      loadTemplate(this.shadowRoot, this.template).then(() => {
        this.setPageTitle(this.getAttribute("title"));
        this.setInnerHTML(this.innerHTML);
      });
    }

    /**
     *
     * @param {string} innerHTML
     */
    setInnerHTML(innerHTML) {
      const mainElement = this.shadowRoot.querySelector("main");

      if (mainElement) {
        mainElement.innerHTML = innerHTML;
      }
    }

    /**
     *
     * @param {string | null} title
     */
    setPageTitle(title) {
      if (title) {
        document.title = title;
      }
    }
  }
);
