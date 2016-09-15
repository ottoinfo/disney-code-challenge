import React from "react"
import { observer } from "mobx-react"

// Stores
import MovieStore from "./stores/MovieStore"
import UIStore from "./stores/UIStore"

// Setup Params on Stores
MovieStore.setup({ UIStore })

@observer
export default class MobxWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = {
    MovieStore: React.PropTypes.object,
    UIStore: React.PropTypes.object,
  }

  getChildContext() {
    return {
      MovieStore,
      UIStore,
    }
  }

  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
}