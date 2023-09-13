import { makeAutoObservable } from 'mobx';

export default class PlantStore {
  constructor() {
    this._types = [];
    this._plants = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setPlants(plants) {
    this._plants = plants;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get plants() {
    return this._plants;
  }
  get selectedType() {
    return this._selectedType;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
