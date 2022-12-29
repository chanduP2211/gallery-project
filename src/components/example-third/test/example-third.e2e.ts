import { newE2EPage } from '@stencil/core/testing';

describe('example-third', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-third></example-third>');

    const element = await page.find('example-third');
    expect(element).toHaveClass('hydrated');
  });
});
