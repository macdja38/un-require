/**
 * Created by macdja38 on 2017-05-10.
 */

module.exports = function unrequire(name) {
  delete require.cache[require.resolve(name)];
}
