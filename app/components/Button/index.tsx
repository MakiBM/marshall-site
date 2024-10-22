import style from "./style.module.css"

interface Props {
  children: React.ReactNode
}

export default function Button({ children }: Props) {
  return (
    <span className={style.button}>
      {children}
    </span>
  )
}