import CounterRoute from 'routes/Person'

describe('(Route) Person', () => {
  it('returns a route configuration object', () => {
    expect(typeof CounterRoute({})).to.equal('object')
  })

  it('has a path \'counter\'', () => {
    expect(CounterRoute({}).path).to.equal('counter')
  })
})
