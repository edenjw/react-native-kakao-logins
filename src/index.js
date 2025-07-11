import { NativeModules } from 'react-native';
var RNKakaoLogins = NativeModules.RNKakaoLogins;
var NativeKakaoLogins = {
    login: function () {
        return RNKakaoLogins.login();
    },
    loginWithKakaoAccount: function () {
        return RNKakaoLogins.loginWithKakaoAccount();
    },
    logout: function () {
        return RNKakaoLogins.logout();
    },
    unlink: function () {
        return RNKakaoLogins.unlink();
    },
    getProfile: function () {
        return RNKakaoLogins.getProfile();
    },
    getAccessToken: function () {
        return RNKakaoLogins.getAccessToken();
    },
    shippingAddresses: function () {
        return RNKakaoLogins.shippingAddresses();
    },
    serviceTerms: function () {
        return RNKakaoLogins.serviceTerms();
    },
};
export var login = NativeKakaoLogins.login;
export var loginWithKakaoAccount = NativeKakaoLogins.loginWithKakaoAccount;
export var logout = NativeKakaoLogins.logout;
export var unlink = NativeKakaoLogins.unlink;
export var getProfile = NativeKakaoLogins.getProfile;
export var getAccessToken = NativeKakaoLogins.getAccessToken;
export var shippingAddresses = NativeKakaoLogins.shippingAddresses;
export var serviceTerms = NativeKakaoLogins.serviceTerms;
export * from './types';
