import { observable, computed, action } from "mobx"
import BaseApi from "../services/BaseApi"
import MovieModel from "../models/MovieModel"
import movieJSON from "../../dma-interview.json"

export default class MovieStore {
  @observable isLoaded = false
  @observable items = []
  @observable errors = {}
  @observable pendingRequest = 0

  constructor() {
    this.api = new BaseApi()
  }

  setup(args) {
    Object.assign(this, args)
  }

  @computed get isLoading() {
    return this.pendingRequest > 0
  }

  @computed get getItems() {
    return this.items.toJS()
  }

  createModel = (data={}) => {
    return new MovieModel(data, this)
  }

  @action
  fetch() {
    // this.pendingRequest++
    // this.api.fetch()
    // .end(action("action-callback", (err, res) => {
    //   if (err) {
    //     console.log("action-callback", err)
    //     throw new Error("API Callback Error")
    //   }
    //   this.pendingRequest--
    //   this.items = res.body.map(this.createModel)
    // }))
    this.items = movieJSON.map(this.createModel)
  }
}

const singleton = new MovieStore()
export default singleton