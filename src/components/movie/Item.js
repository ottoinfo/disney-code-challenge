import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class MovieItem extends React.Component {

  static propTypes = {
    movie: React.PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.movie = props.movie
  }

  render() {
    if (!this.movie.visible) return null
    return (
      <div className={styles.item}>
        <img src={this.movie.image} className={styles.image} />

        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{this.movie.title}</h1>
            <p>{this.movie.format_rating}</p>
          </div>

          <a href="#">Add to Watchlist</a>

          <div className={styles.meta}>
            <p>Release Date: {this.movie.format_date}</p>
            <p>Run Time: {this.movie.format_duration}</p>
          </div>
        </div>
      </div>
    )
  }
}