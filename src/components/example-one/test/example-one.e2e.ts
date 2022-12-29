import { newE2EPage } from '@stencil/core/testing';

describe('example-one', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-one></example-one>');

    const element = await page.find('example-one');
    expect(element).toHaveClass('hydrated');
  });
});
