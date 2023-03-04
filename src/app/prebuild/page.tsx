import Image from 'next/image'
import style from './prebuild.module.scss'

export default function Prebuild () {
  return (
    <form action='/api/checkout_sessions' method='POST' className={style.form}>
      <Image width='350' height='350' src='https://i.imgur.com/HdhgbOk.png' alt='31 Image' priority />
      <button className={style.button}>Checkout</button>
    </form>
  )
}
