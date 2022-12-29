import { newE2EPage } from '@stencil/core/testing';

describe('gallery-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gallery-grid></gallery-grid>');

    const element = await page.find('gallery-grid');
    expect(element).toHaveClass('hydrated');
  });
});
