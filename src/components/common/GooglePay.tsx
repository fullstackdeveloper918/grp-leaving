"use client"
import React from 'react'
import GooglePayButton from '@google-pay/button-react';
import henceofrthEnums from '@/utils/cybersifyEnum';

export default function GooglePay(props: any) {
    console.log(props, 'props');
    const processPayment = async (paymentData: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(async () => {
                let paymentToken = paymentData.paymentMethodData.tokenizationData.token;
                let _paymentToken = JSON.parse(paymentToken)
                let tokenId = _paymentToken?.id
                console.log(tokenId, 'tokenId');
                await props?.handleSocialBuy(tokenId, henceofrthEnums.PaymentType.googlePay)
            }, 500);
        });
    }
    let onPaymentAuthorized = (paymentData: any): Promise<any> => {
         
        console.log('onPaymentAuthorized', paymentData);
        return new Promise(function (resolve, reject) {
            processPayment(paymentData)
                .then(function () {
                    resolve({ transactionState: 'SUCCESS' });
                })
                .catch(function () {
                    resolve({
                        transactionState: 'ERROR',
                        error: {
                            intent: 'PAYMENT_AUTHORIZATION',
                            message: 'Insufficient funds',
                            reason: 'PAYMENT_DATA_INVALID'
                        }
                    });
                });
        });
    }
    return (
        <div className='text-center'>
            <GooglePayButton
    environment={'TEST'}
    buttonSizeMode='fill'
    buttonType='buy'
    paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'stripe',
                        "stripe:version": process.env.NEXT_PUBLIC_STRIPE_VERSION as string,
                        "stripe:publishableKey": process.env.NEXT_PUBLIC_LIVE_STRIPE_KEY as string
                    },
                },
            },
        ],
        merchantInfo: {
            merchantId: process.env.NEXT_PUBLIC_GOOGLEPAY_MERCHANT_ID as string,
            merchantName: process.env.NEXT_PUBLIC_GOOGLEPAY_MERCHANT_NAME as string,
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice:  '1.00', // Fallback to '0.00'
            currencyCode: props?.currencyCode || 'USD', // Default to 'USD'
            countryCode: props?.countryCode || 'US', // Default to 'US'
        },
    }}
    onLoadPaymentData={onPaymentAuthorized}
    existingPaymentMethodRequired={false}
/>

        </div>
    );
}
