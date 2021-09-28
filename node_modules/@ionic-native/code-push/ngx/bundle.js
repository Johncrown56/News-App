'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
exports.SyncStatus = void 0;
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(exports.SyncStatus || (exports.SyncStatus = {}));
/**
 * Defines the available install modes for updates.
 */
exports.InstallMode = void 0;
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(exports.InstallMode || (exports.InstallMode = {}));
var CodePush = /** @class */ (function (_super) {
    tslib.__extends(CodePush, _super);
    function CodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePush.prototype.getCurrentPackage = function () { return core.cordova(this, "getCurrentPackage", {}, arguments); };
    CodePush.prototype.getPendingPackage = function () { return core.cordova(this, "getPendingPackage", {}, arguments); };
    CodePush.prototype.checkForUpdate = function (deploymentKey) { return core.cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePush.prototype.notifyApplicationReady = function () { return core.cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePush.prototype.restartApplication = function () { return core.cordova(this, "restartApplication", {}, arguments); };
    CodePush.prototype.sync = function (syncOptions, downloadProgress) { return core.cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePush.pluginName = "CodePush";
    CodePush.plugin = "cordova-plugin-code-push";
    CodePush.pluginRef = "codePush";
    CodePush.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePush.platforms = ["Android", "iOS"];
    CodePush.decorators = [
        { type: core$1.Injectable }
    ];
    return CodePush;
}(core.IonicNativePlugin));

exports.CodePush = CodePush;
