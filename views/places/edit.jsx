const React = require('react')
const Def = require('../default.jsx')

function edit_form() {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <div>
                    <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                        <div className="form-group">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                value={data.place.name}
                                required />
                        </div>
                        ...
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = edit_form