class ClickToggle {
  private static _instance: ClickToggle
  public static get instance(): ClickToggle {
    if (!this._instance) {
      this._instance = new ClickToggle();
    }
    return this._instance;
  }

  toggleNodeList: NodeListOf<HTMLElement> | undefined = undefined;

  onReady() {
    this.toggleNodeList = document.querySelectorAll('[data-toggle]');
    if(!this.toggleNodeList) return
    this.toggleNodeList.forEach(el => {
      el.addEventListener('click', () => {
      if(!el.nextElementSibling) return
        el.nextElementSibling.classList.toggle('is-active')
      });
    })
  }
}

const clickToggle = ClickToggle.instance
export default clickToggle