import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './proxies-utils';
var SuperTab = /** @class */ (function () {
    function SuperTab(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    SuperTab.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SuperTab = __decorate([
        ProxyCmp({ inputs: ['noScroll'], 'methods': ['getRootScrollableEl'] }),
        Component({ selector: 'super-tab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['noScroll'] })
    ], SuperTab);
    return SuperTab;
}());
export { SuperTab };
var SuperTabButton = /** @class */ (function () {
    function SuperTabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    SuperTabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SuperTabButton = __decorate([
        ProxyCmp({ inputs: ['disabled'] }),
        Component({ selector: 'super-tab-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled'] })
    ], SuperTabButton);
    return SuperTabButton;
}());
export { SuperTabButton };
var SuperTabs = /** @class */ (function () {
    function SuperTabs(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['tabChange']);
    }
    SuperTabs.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SuperTabs = __decorate([
        ProxyCmp({ inputs: ['activeTabIndex', 'config'], 'methods': ['setConfig', 'selectTab'] }),
        Component({ selector: 'super-tabs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['activeTabIndex', 'config'] })
    ], SuperTabs);
    return SuperTabs;
}());
export { SuperTabs };
var SuperTabsContainer = /** @class */ (function () {
    function SuperTabsContainer(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['activeTabIndexChange', 'selectedTabIndexChange']);
    }
    SuperTabsContainer.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SuperTabsContainer = __decorate([
        ProxyCmp({ inputs: ['autoScrollTop', 'swipeEnabled'], 'methods': ['scrollToTop'] }),
        Component({ selector: 'super-tabs-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autoScrollTop', 'swipeEnabled'] })
    ], SuperTabsContainer);
    return SuperTabsContainer;
}());
export { SuperTabsContainer };
var SuperTabsToolbar = /** @class */ (function () {
    function SuperTabsToolbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['buttonClick']);
    }
    SuperTabsToolbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    SuperTabsToolbar = __decorate([
        ProxyCmp({ inputs: ['color', 'scrollable', 'scrollablePadding', 'showIndicator'] }),
        Component({ selector: 'super-tabs-toolbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['color', 'scrollable', 'scrollablePadding', 'showIndicator'] })
    ], SuperTabsToolbar);
    return SuperTabsToolbar;
}());
export { SuperTabsToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy1zdXBlci10YWJzL2FuZ3VsYXIvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Byb3hpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pEO0lBRUUsa0JBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDbEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7O2dCQUhjLGlCQUFpQjtnQkFBSyxVQUFVO2dCQUFlLE1BQU07O0lBRnpELFFBQVE7UUFGcEIsUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBQyxDQUFDO1FBQ3BFLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztPQUN0SSxRQUFRLENBTXBCO0lBQUQsZUFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLFFBQVE7QUFXckI7SUFFRSx3QkFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMs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QUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDLEVBQUMsQ0FBQztRQUNqRixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDO09BQ2hNLGdCQUFnQixDQVE1QjtJQUFELHVCQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gJy4vcHJveGllcy11dGlscyc7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICdAaW9uaWMtc3VwZXItdGFicy9jb3JlJ1xuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU3VwZXJUYWIgZXh0ZW5kcyBDb21wb25lbnRzLlN1cGVyVGFiIHt9XG5AUHJveHlDbXAoe2lucHV0czogWydub1Njcm9sbCddLCAnbWV0aG9kcyc6IFsnZ2V0Um9vdFNjcm9sbGFibGVFbCddfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogJ3N1cGVyLXRhYicsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLCBpbnB1dHM6IFsnbm9TY3JvbGwnXSB9KVxuZXhwb3J0IGNsYXNzIFN1cGVyVGFiIHtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFN1cGVyVGFiQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5TdXBlclRhYkJ1dHRvbiB7fVxuQFByb3h5Q21wKHtpbnB1dHM6IFsnZGlzYWJsZWQnXX0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6ICdzdXBlci10YWItYnV0dG9uJywgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsIGlucHV0czogWydkaXNhYmxlZCddIH0pXG5leHBvcnQgY2xhc3MgU3VwZXJUYWJCdXR0b24ge1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgU3VwZXJUYWJzIGV4dGVuZHMgQ29tcG9uZW50cy5TdXBlclRhYnMge31cbkBQcm94eUNtcCh7aW5wdXRzOiBbJ2FjdGl2ZVRhYkluZGV4JywgJ2NvbmZpZyddLCAnbWV0aG9kcyc6IFsnc2V0Q29uZmlnJywgJ3NlbGVjdFRhYiddfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogJ3N1cGVyLXRhYnMnLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JywgaW5wdXRzOiBbJ2FjdGl2ZVRhYkluZGV4JywgJ2NvbmZpZyddIH0pXG5leHBvcnQgY2xhc3MgU3VwZXJUYWJzIHtcbiAgdGFiQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsndGFiQ2hhbmdlJ10pO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTdXBlclRhYnNDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnRzLlN1cGVyVGFic0NvbnRhaW5lciB7fVxuQFByb3h5Q21wKHtpbnB1dHM6IFsnYXV0b1Njcm9sbFRvcCcsICdzd2lwZUVuYWJsZWQnXSwgJ21ldGhvZHMnOiBbJ3Njcm9sbFRvVG9wJ119KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiAnc3VwZXItdGFicy1jb250YWluZXInLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JywgaW5wdXRzOiBbJ2F1dG9TY3JvbGxUb3AnLCAnc3dpcGVFbmFibGVkJ10gfSlcbmV4cG9ydCBjbGFzcyBTdXBlclRhYnNDb250YWluZXIge1xuICBhY3RpdmVUYWJJbmRleENoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gIHNlbGVjdGVkVGFiSW5kZXhDaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgIGMuZGV0YWNoKCk7XG4gICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgWydhY3RpdmVUYWJJbmRleENoYW5nZScsICdzZWxlY3RlZFRhYkluZGV4Q2hhbmdlJ10pO1xuICB9XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBTdXBlclRhYnNUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50cy5TdXBlclRhYnNUb29sYmFyIHt9XG5AUHJveHlDbXAoe2lucHV0czogWydjb2xvcicsICdzY3JvbGxhYmxlJywgJ3Njcm9sbGFibGVQYWRkaW5nJywgJ3Nob3dJbmRpY2F0b3InXX0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6ICdzdXBlci10YWJzLXRvb2xiYXInLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JywgaW5wdXRzOiBbJ2NvbG9yJywgJ3Njcm9sbGFibGUnLCAnc2Nyb2xsYWJsZVBhZGRpbmcnLCAnc2hvd0luZGljYXRvciddIH0pXG5leHBvcnQgY2xhc3MgU3VwZXJUYWJzVG9vbGJhciB7XG4gIGJ1dHRvbkNsaWNrITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICBjLmRldGFjaCgpO1xuICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFsnYnV0dG9uQ2xpY2snXSk7XG4gIH1cbn1cbiJdfQ==