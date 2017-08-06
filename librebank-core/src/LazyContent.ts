import promiseWrap from 'promise-chains';

export abstract class LazyContent {
    constructor(private _hasFetched: boolean) {

        if (!_hasFetched) {
            return new Proxy(this, {
                get (target, key) {
                    return key in target || key === 'length' || key in Promise.prototype ? target[key] : target.fetch()[key];
                }
            });
        }
    }

    public fetch() {
        if (this._fetch) {
            return this._fetch;
        }
        else {
            this.fetch = promiseWrap(this._fetch());
        }
    }

    protected abstract _fetch();
}

export default LazyContent;
