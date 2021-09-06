//import { ExpandCloseAll } from './ExpandCloseAll'
import { Navigation } from './Navigation'

export const Sidebar = ({ pass }: { pass: any }) => {
  return (
      <>
    <aside className="sidebar">
      <div className="title">
        <h3> ReefRaid Documentation </h3>
      </div>
      <p style={{ color: '#b3bdc7'}}> ReefRaid documentation </p>
      {/*<div className="sidebar-sep1">
        <ExpandCloseAll />
        </div>
        */}
      <Navigation passthrough={pass}/>
    </aside>
    </>
  )
}
