/**
 * Created by macdja38 on 2017-05-10.
 */

/**
 * Un-requires a node.js module
 * @param {string} name name of module to un-require, eg for this one "un-require"
 */
module.exports = function unRequire(name) {
  delete require.cache[require.resolve(name)];
};
