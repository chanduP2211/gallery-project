import { newSpecPage } from '@stencil/core/testing';
import { ExampleTwo } from '../example-two';

describe('example-two', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleTwo],
      html: `<example-two></example-two>`,
    });
    expect(page.root).toEqualHtml(`
      <example-two>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-two>
    `);
  });
});
