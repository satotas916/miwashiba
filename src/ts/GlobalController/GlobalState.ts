import MobileDetect from "mobile-detect";
import clickToggle from "@/StandAloneModules/ClickToggle";
import scrollPageTop from "@/StandAloneModules/ScrollPageTop";
import navigationController from "@/StandAloneModules/NavigationController";
import headerPositionControl from "@/StandAloneModules/HeaderPositionControl";
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
  scrollY = window.scrollY;
  scrollX = window.scrollX;
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
    clickToggle.onReady();
    scrollPageTop.onReady();
    navigationController.onReady();
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
  onScroll() {
    console.log("onScroll");
    this.scrollY = window.scrollY;
    this.scrollX = window.scrollX;
    headerPositionControl.onScroll();
    scrollPageTop.onScroll();
  }
}
const globalState = GlobalState.instance;
export default globalState;
