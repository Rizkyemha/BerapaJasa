const urlParse = {
  WithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._Splitter(url);
    return this._Combiner(splitedUrl);
  },

  WithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._Splitter(url);
  },

  _Splitter(url) {
    const urlSplits = url.split('/');
    return {
      resources: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  _Combiner(splitedUrl) {
    return (splitedUrl.resources ? `/${splitedUrl.resources}` : '/')
        + (splitedUrl.id ? '/:id' : '')
        + (splitedUrl.verb ? `${splitedUrl.verb}` : '');
  },
};

export default urlParse;
