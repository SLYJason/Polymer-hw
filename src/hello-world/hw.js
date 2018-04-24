import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"
class CustomElement extends PolymerElement {
    static get template() {
        return `<h4>custom elssement from Polymer</h4>`
    }
}
customElements.define('custom-element', CustomElement);