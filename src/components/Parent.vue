const Child = {
  //created () { debugger; throw new Error() },
  name='Child',
  render(h) {
     throw new Error(); return h('div') 
     }
}
