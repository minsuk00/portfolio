import Image from 'next/image'
import styles from './page.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Home() {
  return (
    <main className = {cx('main')}>
      hi
    </main>
  )
}
