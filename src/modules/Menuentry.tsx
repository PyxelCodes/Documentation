export const Menuentry = ({ prop, s, t }: { prop: any; s: any, t: string }) => {
  return <button className="menuentry" onClick={() => s(prop)}> {t} </button>
}
