/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * Immutable X API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface AcceptPrimarySaleForbiddenBodyAllOf1
 */
export interface AcceptPrimarySaleForbiddenBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof AcceptPrimarySaleForbiddenBodyAllOf1
     */
    'code': AcceptPrimarySaleForbiddenBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof AcceptPrimarySaleForbiddenBodyAllOf1
     */
    'details': object | null;
}

export const AcceptPrimarySaleForbiddenBodyAllOf1CodeEnum = {
    AuthenticationError: 'AUTHENTICATION_ERROR'
} as const;

export type AcceptPrimarySaleForbiddenBodyAllOf1CodeEnum = typeof AcceptPrimarySaleForbiddenBodyAllOf1CodeEnum[keyof typeof AcceptPrimarySaleForbiddenBodyAllOf1CodeEnum];

