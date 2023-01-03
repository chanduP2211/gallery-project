/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemoAdesa {
        "user": string;
    }
    interface DemoStory {
        "city": string;
        "id1": string;
        "name": string;
    }
    interface ExampleOne {
    }
    interface ExampleThird {
    }
    interface ExampleTwo {
    }
    interface GalleryGrid {
    }
    interface LoginPage {
    }
    interface MyComponent {
        "backgroundColor": string;
        "first": string;
        "last": string;
        "middle": string;
    }
}
export interface GalleryGridCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLGalleryGridElement;
}
declare global {
    interface HTMLDemoAdesaElement extends Components.DemoAdesa, HTMLStencilElement {
    }
    var HTMLDemoAdesaElement: {
        prototype: HTMLDemoAdesaElement;
        new (): HTMLDemoAdesaElement;
    };
    interface HTMLDemoStoryElement extends Components.DemoStory, HTMLStencilElement {
    }
    var HTMLDemoStoryElement: {
        prototype: HTMLDemoStoryElement;
        new (): HTMLDemoStoryElement;
    };
    interface HTMLExampleOneElement extends Components.ExampleOne, HTMLStencilElement {
    }
    var HTMLExampleOneElement: {
        prototype: HTMLExampleOneElement;
        new (): HTMLExampleOneElement;
    };
    interface HTMLExampleThirdElement extends Components.ExampleThird, HTMLStencilElement {
    }
    var HTMLExampleThirdElement: {
        prototype: HTMLExampleThirdElement;
        new (): HTMLExampleThirdElement;
    };
    interface HTMLExampleTwoElement extends Components.ExampleTwo, HTMLStencilElement {
    }
    var HTMLExampleTwoElement: {
        prototype: HTMLExampleTwoElement;
        new (): HTMLExampleTwoElement;
    };
    interface HTMLGalleryGridElement extends Components.GalleryGrid, HTMLStencilElement {
    }
    var HTMLGalleryGridElement: {
        prototype: HTMLGalleryGridElement;
        new (): HTMLGalleryGridElement;
    };
    interface HTMLLoginPageElement extends Components.LoginPage, HTMLStencilElement {
    }
    var HTMLLoginPageElement: {
        prototype: HTMLLoginPageElement;
        new (): HTMLLoginPageElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "demo-adesa": HTMLDemoAdesaElement;
        "demo-story": HTMLDemoStoryElement;
        "example-one": HTMLExampleOneElement;
        "example-third": HTMLExampleThirdElement;
        "example-two": HTMLExampleTwoElement;
        "gallery-grid": HTMLGalleryGridElement;
        "login-page": HTMLLoginPageElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface DemoAdesa {
        "user"?: string;
    }
    interface DemoStory {
        "city"?: string;
        "id1"?: string;
        "name"?: string;
    }
    interface ExampleOne {
    }
    interface ExampleThird {
    }
    interface ExampleTwo {
    }
    interface GalleryGrid {
        "onDataShowed"?: (event: GalleryGridCustomEvent<any>) => void;
    }
    interface LoginPage {
    }
    interface MyComponent {
        "backgroundColor"?: string;
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface IntrinsicElements {
        "demo-adesa": DemoAdesa;
        "demo-story": DemoStory;
        "example-one": ExampleOne;
        "example-third": ExampleThird;
        "example-two": ExampleTwo;
        "gallery-grid": GalleryGrid;
        "login-page": LoginPage;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-adesa": LocalJSX.DemoAdesa & JSXBase.HTMLAttributes<HTMLDemoAdesaElement>;
            "demo-story": LocalJSX.DemoStory & JSXBase.HTMLAttributes<HTMLDemoStoryElement>;
            "example-one": LocalJSX.ExampleOne & JSXBase.HTMLAttributes<HTMLExampleOneElement>;
            "example-third": LocalJSX.ExampleThird & JSXBase.HTMLAttributes<HTMLExampleThirdElement>;
            "example-two": LocalJSX.ExampleTwo & JSXBase.HTMLAttributes<HTMLExampleTwoElement>;
            "gallery-grid": LocalJSX.GalleryGrid & JSXBase.HTMLAttributes<HTMLGalleryGridElement>;
            "login-page": LocalJSX.LoginPage & JSXBase.HTMLAttributes<HTMLLoginPageElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
