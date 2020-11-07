import globalState from "@/GlobalController/GlobalState";

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
    if(!this.pageTopElement) return
    this.pageTopElement.addEventListener('click', this.backToTop);
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      left: globalState.scrollX,
      behavior: 'smooth'
    });
  }

  onReady() {
    this.pageTopElement = document.querySelector('[data-page-top]');
  }
}

const scrollPageTop = ScrollPageTop.instance
export default scrollPageTop