import { Collapsible } from './Collapsible'
import { Menuentry } from './Menuentry'
import { Player } from './ressources/Player'

export const Navigation = ({ passthrough }: { passthrough: any }) => {
    function Entry ({ t, children }: { t: string, children: any }) {
        return <Menuentry t={t} prop={children} s={passthrough}/>
    }
  return (
    <div className="navigation">
      <Collapsible t="Ressources">
          <Entry t="Player">
              <Player/>
          </Entry>
      </Collapsible>
    </div>
  )
}