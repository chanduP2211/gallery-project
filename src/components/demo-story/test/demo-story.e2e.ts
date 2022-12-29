import { newE2EPage } from '@stencil/core/testing';

describe('demo-story', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-story></demo-story>');

    const element = await page.find('demo-story');
    expect(element).toHaveClass('hydrated');
  });
});
