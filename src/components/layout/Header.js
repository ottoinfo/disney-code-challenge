import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class Header extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.router = context.router
  }

  render() {
    return (
      <header className={styles.header}>
        <p>Disney Code Challenge</p>

        <div className={styles.spacer}/>

        <input type="text" className={styles.search} placeholder="search"/>
      </header>
    )
  }

}