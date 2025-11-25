export default class Cl_mTablaWeb {
  private _id: number | null;
  private _creadoEl: string | null;
  private _alias: string | null;
  constructor({
    id,
    creadoEl,
    alias,
  }: {
    id: number | null;
    creadoEl: string | null;
    alias: string | null;
  }) {
    this._id = id ?? null;
    this._creadoEl = creadoEl ?? null;
    this._alias = alias ?? null;
  }
  get id(): number | null {
    return this._id;
  }
  get creadoEl(): string | null {
    return this._creadoEl;
  }
  get alias(): string | null {
    return this._alias;
  }
  toJSON() {
    return {
      id: this._id,
      creadoEl: this._creadoEl,
      alias: this._alias,
    };
  }
}
