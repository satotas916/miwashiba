class NavigationController {
  private static _instance: NavigationController
  public static get instance(): NavigationController {
    if (!this._instance) {
      this._instance = new NavigationController();
    }
    return this._instance;
  }

  navigationElement: Element | null = null;
  openMenuElement: Element | null = null;
  closeMenuNodeList: NodeListOf<Element> | null = null;

  openMenu() {
    this.navigationElement = document.querySelector('[data-navigation]');
    if(!this.navigationElement) return
    this.navigationElement.classList.add('is-active')
    document.body.classList.add('is-fixed')
  }

  closeMenu() {
    this.navigationElement = document.querySelector('[data-navigation]');
    if(!this.navigationElement) return
    this.navigationElement.classList.remove('is-active')
    document.body.classList.remove('is-fixed')
  }

  onReady() {
    this.openMenuElement = document.querySelector('[data-open-menu]');
    this.closeMenuNodeList = document.querySelectorAll('[data-close-menu]');
    if(!this.openMenuElement) return
    if(!this.closeMenuNodeList) return
    this.openMenuElement.addEventListener('click', this.openMenu)
    this.closeMenuNodeList.forEach(el => {
      el.addEventListener('click', this.closeMenu)
    })
  }
}

const navigationController = NavigationController.instance
export default navigationController