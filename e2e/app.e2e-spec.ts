import { AngBlogPage } from './app.po';

describe('ang-blog App', function() {
  let page: AngBlogPage;

  beforeEach(() => {
    page = new AngBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
