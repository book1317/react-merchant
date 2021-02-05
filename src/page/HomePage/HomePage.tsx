import React from 'react'
import css from './HomePage.module.scss'
import FacebookLive from 'images/FacebookLive.png'
import Messager from 'images/Messager.png'
import PageName from 'constant/PageName'
import history from 'utils/History'
import CRM from 'images/CRM.png'

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
            history.push(PageName.facebookLogin)
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
                <div className={css.featureTitle}>
                  AI-Chatbot แชทบอทอัจฉริยะ
                </div>
                <div className={css.featureSubTitle}>
                  ผู้ขายที่ได้รับคำสั่งซื้อจากโพสต์ผลิตภัณฑ์
                </div>
              </div>
            </div>
            <div className={css.featureContent}>
              เมื่อลูกค้าต้องการสั่งซื้อสินค้า
              สามารถคอมเมนต์ใต้โพสขายของร้านค้าได้เลย ระบบแชทบอทของช้อปพลัส
              จะช่วยทักหาลูกค้า พร้อมเปิดบิล ยืนยันออเดอร์
              และปิดการขายอัตโนมัติบนFacebook
            </div>
          </div>

          <div className={css.feature}>
            <div className={css.featureHeader}>
              <div className={css.iconImage}>
                <img src={CRM} alt="" />
              </div>
              <div className={css.featureHeaderText}>
                <div className={css.featureTitle}>ระบบ Social CRM</div>
                <div className={css.featureSubTitle}>
                  รักษาความสัมพันธ์กับลูกค้าบน Social
                </div>
              </div>
            </div>
            <div className={css.featureContent}>
              ฟีเจอร์ที่จะช่วยให้ร้านค้ารักษาความสัมพันธ์ของลูกค้าให้อยู่กับร้านค้าของคุณนานยิ่งขึ้นด้วย
              AI ที่จะช่วยคุณเก็บข้อมูลพฤติกรรมการซื้อของลูกค้า
              พร้อมจัดแบ่งหมวดหมู่ลูกค้า
              ทำให้สามารถสื่อสารได้ตรงกลุ่มมากยิ่งขึ้น
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
