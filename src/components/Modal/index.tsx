import Image from 'next/image'
import style from './modal.module.scss'

export default function Modal ({ message, setMessage }: { message: string, setMessage: any}) {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.head}>
          <Image src='https://i.imgur.com/3w1s1lu.png' width='20' height='20' alt='Exit' onClick={() => setMessage(null)} className={style.exit} />
        </div>
        <div className={style.messageContainer}>
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  )
}
