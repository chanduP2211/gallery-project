import { newE2EPage } from '@stencil/core/testing';

describe('example-two', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-two></example-two>');

    const element = await page.find('example-two');
    expect(element).toHaveClass('hydrated');
  });
});
