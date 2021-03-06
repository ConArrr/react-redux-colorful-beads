import React, { FC } from 'react'
import { Container, Label, SemanticCOLORS } from 'semantic-ui-react'

import './ColorfulBeads.css'

const range = (n: number): number[] =>
  n < 0 ? [] : Array.from(Array(n), (_, i) => i)

const colors: SemanticCOLORS[] = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const ColorfulBeads: FC<{ count?: number }> = ({ count = 0 }) => (
  <Container className="bead-box">
    {range(count).map((n: number) => (
      <Label circular color={colors[n % colors.length]} key={n} />
    ))}
  </Container>
)

export default ColorfulBeads
