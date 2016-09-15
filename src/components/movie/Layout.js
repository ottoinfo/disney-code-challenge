import React from "react"
import { observer } from "mobx-react"
import MovieList from "./List"
import styles from "./style.scss"

@observer
export default class MovieLayout extends React.Component {

  static contextTypes = {
    MovieStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.MovieStore = context.MovieStore
  }

  componentDidMount() {
    if (!this.MovieStore.isLoaded) {
      this.MovieStore.fetch()
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.top_nav}>
          <p>Pagination: 1-5 of {this.MovieStore.getItems.length}</p>

          <div className={styles.spacer}/>

          <p>Sort</p>
        </div>

        <MovieList movies={this.MovieStore.getItems} />
      </div>
    )
  }
}