import React from 'react'
import css from './FacebookSelectPage.module.scss'
// import history from 'utils/History'
// import PageName from 'constant/PageName'
import { IFacebookStore } from 'store/FacebookStore.d'
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

  render() {
    const facebookAuthen = this.props.facebook.getFacebookAuthenJS()
    const profileImage = facebookAuthen.picture.data.url
    console.log('facebookAuthen', facebookAuthen)
    const facebookPageImageList = this.props.facebook.getUserPageWithImageListJS()
    return (
      <div className={css.facebookSelectPage}>
        <div className={css.profileImage}>
          <img src={profileImage} alt="" />
        </div>
        <div className={css.title}>{facebookAuthen.name}</div>
        <div className={css.title}>กรุณาเลือกร้าน</div>
        {facebookPageImageList.map((page) => {
          return (
            <div className={css.pageContainer}>
              <div className={css.pageImage}>
                <img src={page.url} alt="" />
              </div>
              <div className={css.pageName}>{page.name}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default LoginPage
