export default class Cl_mTablaWeb {
    _id;
    _creadoEl;
    _alias;
    constructor({ id, creadoEl, alias, }) {
        this._id = id ?? null;
        this._creadoEl = creadoEl ?? null;
        this._alias = alias ?? null;
    }
    get id() {
        return this._id;
    }
    get creadoEl() {
        return this._creadoEl;
    }
    get alias() {
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
