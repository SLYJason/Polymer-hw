import {PolymerElement, html} from "@polymer/polymer/polymer-element.js"
import '@polymer/polymer/lib/elements/dom-repeat';

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

class IronInput extends PolymerElement {
    static get properties() {
        return {
            bindValue: {
                type: String,
                notify: true
            }
        }
    }
    static get template() {
        return html`<input type="text" value="{{bindValue::input}}"> [[bindValue]]`;
    }
}
customElements.define('iron-input', IronInput);

class EditableName extends PolymerElement {
    static get properties() {
        return {
            owner: {
                type: String,
                value: 'Luyi Song'
            }
        }
    }
    static get template() {
        return `
        Binding value: [[owner]] <iron-input bind-value="{{owner}}"></iron-input>
        `;
    }
}
customElements.define('editable-name', EditableName);

class EmployeeList extends PolymerElement {
    constructor() {
        super();
    }
    static get properties() {
        return {
            employees: {
                type: Array,
                value: [
                    {
                        name: 'Luyi Song',
                        job: 'Software Engieer 3'
                    },
                    {
                        name: 'John Jason',
                        job: 'Software Engieer 4'
                    },
                    {
                        name: 'Todd Mike',
                        job: 'Software Engieer 5'
                    }
                ]
            }
        }
    }
    static get template() {
        return html`
            <template is="dom-repeat" items="[[employees]]">
                <div>First name: <span>{{item.name}}</span>, Job: <span>{{item.job}}</span></div>
            </template>`;
    }
}
customElements.define('employee-list', EmployeeList);

class IconToggle extends PolymerElement {
    constructor() {
        super();
    }
    static get properties() {
        return {
            toggleIcon: {
                type: String,
                value: 'star'
            },
            pressed: {
                type: Boolean,
                notify: true,
                reflectToAttribute: true,
                value: false
            }
        }
    }

    toggle(e) {
        this.pressed = !this.pressed;
        console.log(this.pressed)
    }
    static get template() {
        return html`
        <style>
            :host {
                display: inline-block;
                background-color: lightblue;
            }
            custom-icon {
               
            }
            :host([pressed]) {
                background-color: green;
            }
        </style>
        [[pressed]]
        <button on-click="toggle">Toggle</button>
        <custom-icon icon="[[toggleIcon]]"></custom-icon>`;
    }
}
customElements.define('icon-toggle', IconToggle);

class CustomIcon extends PolymerElement {
    static get properties() {
        return {
            icon: {
                type: String
            }
        }
    }
    static get template() {
        return html`
            <style>
                :host {
                    display: inline-block;
                    height: inherit;                
                }
            </style>
            <embed src="../assets/svg/[[icon]].svg"/>
        `
    }
}
customElements.define('custom-icon', CustomIcon);