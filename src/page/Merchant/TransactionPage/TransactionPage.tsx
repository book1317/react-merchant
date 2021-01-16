import React from 'react'

export interface ITransactionPageProps {}

export interface ITransactionPageState {}

class TransactionPage extends React.Component<
  ITransactionPageProps,
  ITransactionPageState
> {
  // state = { :  }
  componentDidMount() {
    console.log('didmount')
  }

  render() {
    return <div>Transaction</div>
  }
}

export default TransactionPage
