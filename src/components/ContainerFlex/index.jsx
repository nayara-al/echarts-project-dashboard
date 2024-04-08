import style from "./ContainerFlex.module.css"
export default function ContainerFlex({children}) {
  return (
    <div className={style.div}>
      {children}
    </div>
  )
}
