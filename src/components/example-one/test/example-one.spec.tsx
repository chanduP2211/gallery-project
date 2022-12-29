import { newSpecPage } from '@stencil/core/testing';
import { ExampleOne } from '../example-one';

describe('example-one', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleOne],
      html: `<example-one></example-one>`,
    });
    expect(page.root).toEqualHtml(`
      <example-one>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-one>
    `);
  });
});
