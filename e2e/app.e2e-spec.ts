import { MeanPaintersPage } from './app.po';

describe('mean-painters App', () => {
  let page: MeanPaintersPage;

  beforeEach(() => {
    page = new MeanPaintersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
