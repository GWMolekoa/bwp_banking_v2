import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

// Creation of Plaid Config 
const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
            'PLAID-SECRET': process.env.PLAID_SECRET,
        }
    }
})

// Creation of PlaidClient to be called within Server-actions
export const plaidClient = new PlaidApi(configuration);