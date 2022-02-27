const React = require('react')
const Def = require('./default')

function home() {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
            </main>
            <div>
                <img src="" alt=""></img>
            </div>
            <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
        </Def>
    )
}

module.exports = home