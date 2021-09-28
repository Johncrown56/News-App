import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { Components } from '@ionic-super-tabs/core';
import * as ɵngcc0 from '@angular/core';
export declare interface SuperTab extends Components.SuperTab {
}
export declare class SuperTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SuperTab, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SuperTab, "super-tab", never, { "noScroll": "noScroll"; }, {}, never, ["*"]>;
}
export declare interface SuperTabButton extends Components.SuperTabButton {
}
export declare class SuperTabButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SuperTabButton, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SuperTabButton, "super-tab-button", never, { "disabled": "disabled"; }, {}, never, ["*"]>;
}
export declare interface SuperTabs extends Components.SuperTabs {
}
export declare class SuperTabs {
    protected z: NgZone;
    tabChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SuperTabs, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SuperTabs, "super-tabs", never, { "activeTabIndex": "activeTabIndex"; "config": "config"; }, {}, never, ["*"]>;
}
export declare interface SuperTabsContainer extends Components.SuperTabsContainer {
}
export declare class SuperTabsContainer {
    protected z: NgZone;
    activeTabIndexChange: EventEmitter<CustomEvent>;
    selectedTabIndexChange: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SuperTabsContainer, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SuperTabsContainer, "super-tabs-container", never, { "autoScrollTop": "autoScrollTop"; "swipeEnabled": "swipeEnabled"; }, {}, never, ["*"]>;
}
export declare interface SuperTabsToolbar extends Components.SuperTabsToolbar {
}
export declare class SuperTabsToolbar {
    protected z: NgZone;
    buttonClick: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SuperTabsToolbar, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<SuperTabsToolbar, "super-tabs-toolbar", never, { "color": "color"; "scrollable": "scrollable"; "scrollablePadding": "scrollablePadding"; "showIndicator": "showIndicator"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=proxies.d.ts.map