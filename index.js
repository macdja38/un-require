/**
 * Created by macdja38 on 2017-05-10.
 */

function unrequire(name) {
  delete require.cache[require.resolve(name)];
}