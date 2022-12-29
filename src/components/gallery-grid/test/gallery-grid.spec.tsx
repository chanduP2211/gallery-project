import { newSpecPage } from '@stencil/core/testing';
import { GalleryGrid } from '../gallery-grid';

describe('gallery-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GalleryGrid],
      html: `<gallery-grid></gallery-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <gallery-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gallery-grid>
    `);
  });
});
