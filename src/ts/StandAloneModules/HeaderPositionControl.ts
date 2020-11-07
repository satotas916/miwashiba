import globalState from "@/GlobalController/GlobalState";

class HeaderPositionControl {
  private static _instance: HeaderPositionControl
  public static get instance(): HeaderPositionControl {
    if (!this._instance) {
      this._instance = new HeaderPositionControl();
    }
    return this._instance;
  }

  headerElement: Element | null = null;

  onScroll() {
    this.headerElement = document.querySelector('[data-header]');
    if(!this.headerElement || globalState.isSP) return
    this.headerElement.setAttribute("style", `left: -${globalState.scrollX}px`);
  }
}

const headerPositionControl = HeaderPositionControl.instance
export default headerPositionControl
