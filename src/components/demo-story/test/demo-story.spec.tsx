import { newSpecPage } from '@stencil/core/testing';
import { DemoStory } from '../demo-story';

describe('demo-story', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoStory],
      html: `<demo-story></demo-story>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-story>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-story>
    `);
  });
});
