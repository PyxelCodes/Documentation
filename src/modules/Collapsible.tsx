import { FC, useState } from 'react'
import Col from 'react-collapsible'
import { CollapsibleTitle } from './CollapsibleTitle'

interface props {
  t: string
}

export const Collapsible: FC<props> = ({ children, t }) => {
  let [state, setState] = useState(false)
  return (
    <Col
      transitionTime={1}
      onOpen={() => setState(true)}
      onClose={() => setState(false)}
      trigger={<CollapsibleTitle t={t} open={state} />}
    >
      {children}
    </Col>
  )
}
