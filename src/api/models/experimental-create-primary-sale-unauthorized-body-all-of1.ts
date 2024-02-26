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
 * @interface ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1
 */
export interface ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1
     */
    'code': ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1
     */
    'details': object | null;
}

export const ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1CodeEnum = {
    UnauthorisedRequest: 'UNAUTHORISED_REQUEST'
} as const;

export type ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1CodeEnum = typeof ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1CodeEnum[keyof typeof ExperimentalCreatePrimarySaleUnauthorizedBodyAllOf1CodeEnum];

