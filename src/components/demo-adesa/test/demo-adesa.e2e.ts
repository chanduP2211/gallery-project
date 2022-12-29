import { newE2EPage } from '@stencil/core/testing';

describe('demo-adesa', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-adesa></demo-adesa>');

    const element = await page.find('demo-adesa');
    expect(element).toHaveClass('hydrated');
  });
});
