'use client'

import CountUp from 'react-countup'

export const AnimatedCounter = ({ amount }: { amount: number } ) => {
  return (
    <div className='w-full'>
        <CountUp 
            duration={2.}
            decimal="."
            decimals={2}
            prefix="$"
            end={amount} 
        />
    </div>
  )
}
