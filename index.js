module.exports = Franz => class Zalo extends Franz {
    overrideUserAgent() {
        return window.navigator.userAgent.replace(/(Franz|Electron)([^\s]+\s)/g, '');
    }
};