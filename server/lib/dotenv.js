//This module parses .env file data
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});
module.exports = data => Object.fromEntries(data.split(/\r?\n/g).map(line => {
    if (!line.includes('=') || line.trim().startsWith('#')) return null;
    const key = line.slice(0, line.indexOf('='));
    const value = line.slice(line.indexOf('=') + 1);
    return (key && value) ? [key, value] : null;
}).filter(item => item !== null))