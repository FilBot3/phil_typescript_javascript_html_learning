/**
 * helloWorld
 *
 * Defined outside of a module.exports, I continually get this error that it's
 * not used. Which is "fine" because after it's compiled, it's used by the HTML
 * page.
 * I do not want to disable this warning to just make it work, or add a bunch of
 * flags to the source file. There has to be some way to make it so that eslint
 * doesn't tell me that this function isn't used, when it will be in the HTML.
 */
function helloWorld() {
  console.log('Hello, World!');
};
