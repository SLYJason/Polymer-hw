import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"
class CustomElement extends PolymerElement {
    constructor() {
        super();
        console.log('customer-element was created!');
        console.log(this.tagName);
    }
    static get template() {
        return html
            `<p>Custome Element From Polymer</p>`;
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
                    color: #000000;
                }
            </style>
            <div>
                <!-- any children are rendered here -->
                &lt;<slot name="element-name">NAME</slot>&gt;
                &lt;<slot name="element-description">DESCRIPTION</slot>&gt;
                &lt;<slot name="element-url">URL</slot>&gt;
            </div>`
    }
}
customElements.define('picture-frame', PictureFrame);

class MyTag extends PolymerElement{
    constructor() {
        super();
        this.name = 'Luyi Song'
    }
    static get template() {
        return html`<p>My name is {{name}}</p>`;
    }
}
customElements.define('my-tag', MyTag);

class ConfigurableTagName extends PolymerElement{
    static get properties() {
        return {
            owner: {
                type: String,
                value: "Luyi Song ",
            }
        };
    }
    static get template() {
        return html`Name Property: [[owner]]`;
    }
}
customElements.define('configurable-tag-name', ConfigurableTagName);