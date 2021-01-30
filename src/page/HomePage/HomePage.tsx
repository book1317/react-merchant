import React from 'react'
import css from './HomePage.module.scss'
import FacebookLive from 'images/FacebookLive.png'
import Messager from 'images/Messager.png'
import PageName from 'constant/PageName'
import history from 'utils/History'

export interface IHomePageProps {}

export interface IHomePageState {}

class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  //   constructor(props: IHomePageProps) {
  //     super(props)
  //     this.state = { :  };
  //   }

  render() {
    return (
      <div className={css.homePage}>
        <div className={css.headerContainer}>
          <div className={css.name}>Omise V2</div>
          <div className={css.menu}>
            <div>เริ่มต้นกับเรา</div>
            <div>ราคาแพ็กเก็จ</div>
            <div>ช่วยเหลือ</div>
            <div>Blog</div>
            <div className={css.loginButton}>เข้าสู่ระบบ</div>
          </div>
        </div>
        <div className={css.contentContainer}>
          <div className={css.title}>ระบบจัดการร้านค้าออนไลน์ครบวงจร</div>
          <div className={css.content}>
            <div>แชทง่าย ขายดี ทุกช่องทางทั้ง</div>
            <div>
              Facebook, LINE Official Account, Instagram และเว็บส่วนตัวของคุณ
            </div>
            <div>
              กว่า 350,000 ร้านพิสูจน์แล้วว่า
              ช่วยลดเวลาทำงานและเพิ่มยอดขายได้จริง
            </div>
          </div>
        </div>

        <div
          className={css.startButtonContainer}
          onClick={() => {
            history.push(PageName.facebook)
          }}
        >
          <div className={css.startButton}>เริ่มต้นใช้งาน</div>
        </div>

        <div className={css.contentContainer2}>
          <div className={css.title}>
            Omise-V2 ระบบขายของออนไลน์
            ให้คุณจัดการร้านค้าออนไลน์แบบเก็บครบจบทุกออเดอร์
          </div>

          <div className={css.feature}>
            <div className={css.featureHeader}>
              <div className={css.iconImage}>
                <img src={FacebookLive} alt="" />
              </div>
              <div className={css.featureHeaderText}>
                <div className={css.featureTitle}>AI-Auto Detection</div>
                <div className={css.featureSubTitle}>
                  สำหรับผู้ขายที่ live-streaming บน Facebook
                </div>
              </div>
            </div>
            <div className={css.featureContent}>
              Shoplus โปรแกรมช่วยแม่ค้าไลฟ์สด
              ที่จะมาช่วยร้านค้าให้ขายของผ่านระบบไลฟ์สดง่ายดายบน Facebook
              เก็บออเดอร์อัตโนมัติผ่านระบบดูดไลฟ์สดระหว่างไลฟ์ขาย
              พร้อมส่งบิลให้ลูกค้าทุกคนได้อย่างรวดเร็ว
            </div>
          </div>

          <div className={css.feature}>
            <div className={css.featureHeader}>
              <div className={css.iconImage}>
                <img src={Messager} alt="" />
              </div>
              <div className={css.featureHeaderText}>
                <div className={css.featureTitle}>AI-Messenger Plug-in</div>
                <div className={css.featureSubTitle}>
                  สำหรับร้านค้าที่รับออเดอร์ผ่าน Facebook messenger
                </div>
              </div>
            </div>
            <div className={css.featureContent}>
              ฟีเจอร์ในระบบขายของออนไลน์ Shoplus
              นี้ตอบโจทย์กับเพจขายของและลูกค้าขาเม้าท์สุดๆ ด้วยระบบ Shoplus
              plug-in ช่วยคุณเก็บออเดอร์ พร้อมส่งบิลอัตโนมัติ ปิดการขายได้ง่ายๆ
              ได้เลยทันที แค่นี้ก็มีเวลาเหลือเฟือไปขายต่อได้อีกเยอะ!
            </div>
          </div>

          <div className={css.feature}>
            <div className={css.featureHeader}>
              <div className={css.iconImage}>
                <img src={Messager} alt="" />
              </div>
              <div className={css.featureHeaderText}>
                <div className={css.featureTitle}>AI-Messenger Plug-in</div>
                <div className={css.featureSubTitle}>
                  สำหรับร้านค้าที่รับออเดอร์ผ่าน Facebook messenger
                </div>
              </div>
            </div>
            <div className={css.featureContent}>
              ฟีเจอร์ในระบบขายของออนไลน์ Shoplus
              นี้ตอบโจทย์กับเพจขายของและลูกค้าขาเม้าท์สุดๆ ด้วยระบบ Shoplus
              plug-in ช่วยคุณเก็บออเดอร์ พร้อมส่งบิลอัตโนมัติ ปิดการขายได้ง่ายๆ
              ได้เลยทันที แค่นี้ก็มีเวลาเหลือเฟือไปขายต่อได้อีกเยอะ!
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
