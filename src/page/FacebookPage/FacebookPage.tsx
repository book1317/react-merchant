import React from 'react'
import css from './FacebookPage.module.scss'
import history from 'utils/History'
import PageName from 'constant/PageName'
import FacebookLogin from 'react-facebook-login'
import {
  IFacebookAuthen,
  IFacebookPageList,
  IFacebookStore,
} from 'store/FacebookStore.d'
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
    console.log(facebookAuthen)
    const { userID, accessToken } = facebookAuthen
    // const facebookPageList: IFacebookPageList[] =
    //   (await getUserPageList(userID, accessToken)) || []

    await this.props.facebook.getUserPageWithImageList(userID, accessToken)
    const facebookPageImageList = this.props.facebook.getUserPageWithImageListJS()
    console.log('facebookPageImageList', facebookPageImageList)
  }

  render() {
    return (
      <div className={css.LoginPageContainer}>
        <div className={css.title}>
          เพื่อให้ Page365 สามารถเชื่อมต่อกับ Facebook ได้ในครั้งแรก โปรดกด
          “เข้าสู่ระบบด้วย Facebook” และกด “ดำเนินการต่อ” ในหน้าถัดไป
        </div>
        <div className={css.exampleImage}>
          <img
            src={
              'https://global.page365.net/wp-content/uploads/2014/09/register-2.png'
            }
            alt=""
          />
        </div>
        <FacebookLogin
          appId="226874889079580"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          scope="public_profile,pages_show_list,pages_read_engagement"
          callback={this.responseFacebook}
        />
      </div>
    )
  }
}

export default LoginPage
