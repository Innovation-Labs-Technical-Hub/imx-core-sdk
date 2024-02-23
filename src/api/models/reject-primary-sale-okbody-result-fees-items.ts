/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * Immutable X API
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Fee required to be paid for a primary sale
 * @export
 * @interface RejectPrimarySaleOKBodyResultFeesItems
 */
export interface RejectPrimarySaleOKBodyResultFeesItems {
    /**
     * Ethereum address of the fee recipient
     * @type {string}
     * @memberof RejectPrimarySaleOKBodyResultFeesItems
     */
    'address': string;
    /**
     * Fee amount
     * @type {string}
     * @memberof RejectPrimarySaleOKBodyResultFeesItems
     */
    'amount': string;
    /**
     * Fee percentage in basis points (e.g. 200 for 2%)
     * @type {number}
     * @memberof RejectPrimarySaleOKBodyResultFeesItems
     */
    'percentage': number;
    /**
     * Fee type
     * @type {string}
     * @memberof RejectPrimarySaleOKBodyResultFeesItems
     */
    'type': RejectPrimarySaleOKBodyResultFeesItemsTypeEnum;
}

export const RejectPrimarySaleOKBodyResultFeesItemsTypeEnum = {
    Ecosystem: 'ECOSYSTEM',
    Protocol: 'PROTOCOL'
} as const;

export type RejectPrimarySaleOKBodyResultFeesItemsTypeEnum = typeof RejectPrimarySaleOKBodyResultFeesItemsTypeEnum[keyof typeof RejectPrimarySaleOKBodyResultFeesItemsTypeEnum];


