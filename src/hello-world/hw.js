import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"
class CustomElement extends PolymerElement {
    constructor() {
        super();
        console.log('my-element was created!');
        console.log(this.tagName);
    }
    static get template() {
        return html
            `<h1>Custome Element From Polymer</h1>`;
    }

}
customElements.define('custom-element', CustomElement);
class PictureFrame extends PolymerElement {
    static get template() {
        return html`
        <!-- scoped CSS for this element -->
            <style>
                div {
                    display: inline-block;
                    background-color: #ccc;
                    border-radius: 8px;
                    padding: 4px;
                }
            </style>
            <div>
                <!-- any children are rendered here -->
                &lt;<slot name="element-name">NEED NAME</slot>&gt;
                &lt;<slot name="element-description">NEED DESCRIPTION</slot>&gt;
            </div>`
    }
}
customElements.define('picture-frame', PictureFrame);