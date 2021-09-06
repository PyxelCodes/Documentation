import { useState } from 'react'
import { CollapseSVG, ExpandSVG } from '../icons/svgs'

export const ExpandCloseAll = () => {
  let [state, setState] = useState(false)

  return (
    <button
    className="ExpandCloseAll"
    onClick={() => {
        setState(!state);
    }}
    >
      {state ? <CollapseSVG /> : <ExpandSVG />}
      {state ? 'Collapse all' : 'Expand all'}
    </button>
  )
}
