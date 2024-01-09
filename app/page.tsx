import Image from 'next/image'
import styles from './page.module.css'
import Container1 from '@/components/mainpage-containters/Container1'
import Container2 from '@/components/mainpage-containters/Container2'
import Container3 from '@/components/mainpage-containters/Container3'
import Container4 from '@/components/mainpage-containters/Container4'
import Container5 from '@/components/mainpage-containters/Container5'
import Container6 from '@/components/mainpage-containters/Container6'
import MultiLevelBackground from '@/components/MultiLevelBackground'
import EncourageContainer from '@/components/mainpage-containters/EncourageContainer'


export default function Home() {
  return (
    <main className={styles.main}>
      <MultiLevelBackground>
        <Container1 />
        <EncourageContainer />
        <Container2 />
        <Container3 />
        <Container5 />

        <Container6 />
      </MultiLevelBackground>
    </main>
  )
}
