import React from 'react'
import css from './FacebookLoginPage.module.scss'
import history from 'utils/History'
import PageName from 'constant/PageName'
import FacebookLogin from 'react-facebook-login'
import { IFacebookAuthen, IFacebookStore } from 'store/FacebookStore.d'
import { inject, observer } from 'mobx-react'

export interface ILoginPageProps {
  facebook: IFacebookStore
}

export interface ILoginPageState {}

@inject('facebook')
@observer
class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  // state = { :  }
  async componentDidMount() {}

  responseFacebook = async (facebookAuthen: IFacebookAuthen) => {
    this.props.facebook.setFacebookAuthen(facebookAuthen)
    const { userID, accessToken } = facebookAuthen
    await Promise.all([
      this.props.facebook.getImageProfile(userID),
      this.props.facebook.getUserPageWithImageList(userID, accessToken),
    ])
    localStorage.setItem('isAuthen', 'OK')
    history.push(PageName.facebookSelect)
  }

  render() {
    return (
      <div className={css.LoginPageContainer}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <div className={css.title}>
              เพื่อประสิทธิภาพในการใช้งาน Omise V2
            </div>
            <div className={css.title}>
              กรุณาเชื่อมต่อกับ Facebook ได้ในครั้งแรก
            </div>
          </div>
          <FacebookLogin
            buttonStyle={{ borderRadius: '12px' }}
            // cssClass={css.facebookButton}
            appId="226874889079580"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={componentClicked}
            textButton="เข้าสู่ระบบด้วย facebook"
            scope="public_profile,pages_show_list,pages_read_engagement"
            callback={this.responseFacebook}
          />
        </div>
      </div>
    )
  }
}

export default LoginPage
