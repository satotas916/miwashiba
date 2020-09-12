class ScrollPageTop {
  private static _instance: ScrollPageTop
  public static get instance(): ScrollPageTop {
    if (!this._instance) {
      this._instance = new ScrollPageTop();
    }
    return this._instance;
  }

  pageTopElement: Element | null = null;

  onScroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onReady() {
    this.pageTopElement = document.querySelector('[data-page-top]');
    if(!this.pageTopElement) return
    this.pageTopElement.addEventListener('click', this.onScroll);
  }
}

const scrollPageTop = ScrollPageTop.instance
export default scrollPageTop