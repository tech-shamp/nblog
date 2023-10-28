import css from "@css/layout.module.css"
import { ReactNode } from "react"
import Sidebar from "./Sidenav"

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={css.Layout}>
      <Sidebar />
      <div className={css.Content}>{children}</div>
    </div>
  )
}
