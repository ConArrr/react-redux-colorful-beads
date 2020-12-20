import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { CounterState } from 'reducer'

import ColorfulBeads from 'components/molecules/ColorfulBeads'

const EnhancedColorfulBeads: FC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count)

  return <ColorfulBeads count={count} />
}

export default EnhancedColorfulBeads
