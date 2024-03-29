import React from 'react'
import css from './FacebookSelectPage.module.scss'
// import history from 'utils/History'
// import PageName from 'constant/PageName'
import { IFacebookStore } from 'store/FacebookStore.d'
import { inject, observer } from 'mobx-react'
import history from 'utils/History'
import PageName from 'constant/PageName'

export interface IFacebookSelectPageProps {
  facebook: IFacebookStore
}

export interface IFacebookSelectPageState {}

@inject('facebook')
@observer
class FacebookSelectPage extends React.Component<
  IFacebookSelectPageProps,
  IFacebookSelectPageState
> {
  // state = { :  }
  async componentDidMount() {
    const facebookAuthen = this.props.facebook.getFacebookAuthenJS()
    if (!facebookAuthen.id) {
      history.replace(PageName.facebookLogin)
    }
  }

  render() {
    const facebookAuthen = this.props.facebook.getFacebookAuthenJS()
    const profileImage = facebookAuthen.picture.data.url
    const FacebookSelectPageImageList = this.props.facebook.getUserPageWithImageListJS()
    return (
      <div className={css.facebookSelectPage}>
        <div className={css.contentContainer}>
          <div className={css.profileImage}>
            <img src={profileImage} alt="" />
          </div>
          <div className={css.title}>{facebookAuthen.name}</div>
          <div className={css.subTitle}>กรุณาเลือกร้านที่ต้องการเชื่อมต่อ</div>
          {FacebookSelectPageImageList.map((page) => {
            return (
              <div
                className={css.pageContainer}
                onClick={() => {
                  history.push(PageName.merchant)
                }}
              >
                <div className={css.pageImage}>
                  <img src={page.url} alt="" />
                </div>
                <div className={css.pageName}>{page.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default FacebookSelectPage
