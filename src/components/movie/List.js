import React from "react"
import { observer } from "mobx-react"
import MovieItem from "./Item"
import styles from "./style.scss"

@observer
export default class MovieList extends React.Component {

  static propTypes = {
    movies: React.PropTypes.array,
  }

  constructor(props, context) {
    super(props, context)
    this.movies = props.movies
  }

  componentWillReceiveProps(nextProps) {
    this.movies = nextProps.movies
  }

  render() {
    if (!this.movies.length) return null
    return (
      <div className={styles.list}>
        { this.movies.map(movie =>
          <MovieItem key={movie.uuid} movie={movie}/> 
        ) }
      </div>
    )
  }
}