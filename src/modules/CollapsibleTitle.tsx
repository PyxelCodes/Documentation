import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

export const CollapsibleTitle = ({ t, open }: { t: string; open: boolean }) => {
  return (
    <div className="CollapsibleTitle">
      {t} {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </div>
  )
}
