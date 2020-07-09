/**
 |--------------------------------------------------------------
 | Importing Graphql & Creating Graphql Asset Get Query !!
 | @author Abhinav Rajpurohit
 | @version 1.0.0
 |--------------------------------------------------------------
 */
import { gql } from '@apollo/client';

/**
 * Exporting graphql get query of assets
 */
export const GET_CRYPTO_CURRENCY = gql`
    query PageAssets ($skip: Int!, $limit: Int!, $search: String!) {
        assets(sort: [{marketCapRank: ASC}], page: {skip: $skip, limit: $limit}, filter:{assetName: {_like: $search}}) {
        id
        assetName
        assetSymbol
        marketCap
        marketCapRank
        markets {
            marketSymbol
            baseSymbol
            exchangeSymbol
            ticker {
            lastPrice
            highPrice
            lowPrice
            percentChange
            }
        }
        }
    }
`