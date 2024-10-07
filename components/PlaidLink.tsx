import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation'
import { createLinkToken } from '@/lib/actions/user.actions'

// Link and Button Creation to connect to bank through plaid
const PlaidLink = ({ user, variant}: PlaidLinkProps) => {
    const router = useRouter();
    const [token, setToken] = useState('');

    // Connect existing user to a plaid user through a token
    useEffect(() => {
        const getLinkToken = async () => {
           const data = await createLinkToken(user); 
           setToken(data?.linkToken);
        }

        getLinkToken();

    }, [user]);

    // Exchange of public token to allow linking of bank accounts and push to home page
    const onSuccess = useCallback<PlaidLinkOnSuccess>( async (public_token: string) => {
        //await exchangePublicToken({
        //    publicToken: public_token,
        //    user,
        //})

        router.push('/');

    }, [user])

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const { open, ready } = usePlaidLink(config);

  return (
    <>
        {
        variant === "primary" 
         ?( <Button 
                onClick={() => open()}
                disabled={!ready}
                className='plaidlink-primary'>
                Connect Bank
            </Button>
        ): variant === 'ghost'

        ?(  <Button>
                Connect Bank
            </Button>
        ): (
            <Button>
                Connect Bank
            </Button>
        )}
    </>
  )
}

export default PlaidLink