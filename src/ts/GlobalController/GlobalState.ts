import MobileDetect from "mobile-detect";
class GlobalState {
  private static _instance: GlobalState;
  isSP: boolean;
  isTablet: boolean;
  isPC: boolean;
  oldPosY = window.pageYOffset;
  oldPosX = window.pageXOffset;
  oldWindowHeight = window.innerHeight;
  oldWindowWidth = window.innerWidth;
  innerHeight = window.innerHeight;
  innerWidth = window.innerWidth;
  private constructor() {
    const mt = new MobileDetect(window.navigator.userAgent);
    this.isSP = !!(!mt.tablet() && mt.mobile());
    this.isTablet = !!mt.tablet();
    this.isPC = !!(!!mt.tablet() && mt.mobile());
  }
  public static get instance(): GlobalState {
    if (!this._instance) {
      this._instance = new GlobalState();
    }
    return this._instance;
  }
  onReady() {
    console.log("onReady");
    if (this.isSP) {
      document.body.classList.add("is-sp");
    } else if (this.isTablet) {
      document.body.classList.add("is-tablet");
    } else {
      document.body.classList.add("is-pc");
    }
  }
  onLoad() {
    console.log("onLoad");
  }
  onResize() {
    console.log("onResize");
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    this.oldPosX = window.pageXOffset;
    this.oldPosY = window.pageYOffset;
  }
}
const globalState = GlobalState.instance;
export default globalState;
