import { newSpecPage } from '@stencil/core/testing';
import { DemoAdesa } from '../demo-adesa';

describe('demo-adesa', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoAdesa],
      html: `<demo-adesa></demo-adesa>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-adesa>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-adesa>
    `);
  });
});
