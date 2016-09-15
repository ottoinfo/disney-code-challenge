import { observable, computed } from "mobx"
import uuid from "uuid"

export default class MovieModel {
  // Model Attributes
  uuid = uuid.v4()
  @observable image = ""
  @observable title = ""
  @observable slug = ""
  @observable date = ""
  @observable rating = ""
  @observable run_time = 0
  @observable show = true
  // Reference
  store = null

  constructor(data={}, store) {
    Object.assign(this, data)
    this.store = store
  }

  @computed get visible() {
    return true
  }

  @computed get format_rating() {
    return this.rating.toUpperCase()
  }

  @computed get format_date() {
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date(this.date)
    return months[date.getMonth()]  + " " + date.getDate() +  ", " + date.getFullYear()
  }

  @computed get format_duration() {
    const date = new Date(null)
    date.setSeconds(this.run_time)
    const array = date.toISOString().substr(11, 8).split(":")
    return `${parseInt(array[0])} hours ${array[1]} minutes`
  }

  asJSON = ()=> {
    return {
      name: this.name,
    }
  }
}