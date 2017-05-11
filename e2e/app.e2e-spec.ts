import { Angular4ReactiveTypeFormsPage } from './app.po';

describe('angular4-reactive-type-forms App', function() {
  let page: Angular4ReactiveTypeFormsPage;

  beforeEach(() => {
    page = new Angular4ReactiveTypeFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
