import React from "react"
import { observer } from "mobx-react"
import SearchStore from "../search/Store"
import styles from "./style.scss"

@observer
export default class Header extends React.Component {

  static contextTypes = {
    MovieStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.MovieStore = context.MovieStore
  }

  render() {
    return (
      <header className={styles.header}>
        <p>Disney Code Challenge</p>

        <div className={styles.spacer}/>

        <SearchStore store={this.MovieStore} />
      </header>
    )
  }

}