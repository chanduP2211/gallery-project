import { newSpecPage } from '@stencil/core/testing';
import { ExampleThird } from '../example-third';

describe('example-third', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleThird],
      html: `<example-third></example-third>`,
    });
    expect(page.root).toEqualHtml(`
      <example-third>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-third>
    `);
  });
});
