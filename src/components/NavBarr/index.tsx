import { pages } from './routes'
import Link from 'next/link'
import style from './style.module.scss'

export default function NavBarr () {
  return (
    <div className={style.container}>
      {pages.map(({ name, path }) => <Link key={path} href={path} className={style.link}>{name}</Link>)}
    </div>
  )
}
