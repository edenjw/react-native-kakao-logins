import { KaKaoLoginWebType } from './types';
export declare const login: {
    (): Promise<import("./types").KakaoOAuthToken>;
    (props: KaKaoLoginWebType): Promise<import("./types").KakaoOAuthWebToken>;
};
export declare const loginWithKakaoAccount: () => Promise<import("./types").KakaoOAuthToken>;
export declare const logout: {
    (): Promise<string>;
    (tokenWeb: string): Promise<string>;
};
export declare const unlink: {
    (): Promise<string>;
    (tokenWeb: string): Promise<string>;
};
export declare const getProfile: {
    (): Promise<import("./types").KakaoProfile>;
    (tokenWeb: string): Promise<import("./types").KakaoProfileWebType>;
};
export declare const getAccessToken: () => Promise<import("./types").KakaoAccessTokenInfo>;
export declare const shippingAddresses: () => Promise<import("./types").KakaoShippingAddresses>;
export declare const serviceTerms: () => Promise<import("./types").KakaoUserServiceTerms>;
export * from './types';
