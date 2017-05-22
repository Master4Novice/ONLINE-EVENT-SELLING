import { ONLINEEVENTSELLINGPage } from './app.po';

describe('online-event-selling App', () => {
  let page: ONLINEEVENTSELLINGPage;

  beforeEach(() => {
    page = new ONLINEEVENTSELLINGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
