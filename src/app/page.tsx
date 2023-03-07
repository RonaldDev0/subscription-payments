import Image from 'next/image'
import style from './style.module.scss'

export default function Prebuild () {
  return (
    <main>
      <form action='/api/checkout_sessions' method='POST' className={style.form}>
        <Image width='350' height='350' src='https://i.imgur.com/J4MY1D7.png' alt='31 Image' priority />
        <p>$10.00 | per month</p>
        <button className={style.button}>Checkout</button>
      </form>
    </main>
  )
}
