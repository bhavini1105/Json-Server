import React from 'react'

function Form({handleChange , handleSubmit , user }) {
    return (
        <>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email" className="form-control"  name='email'
                                value={user.email || ""}
                                 onChange = {handleChange} />
                                
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Password</label>
                                <input type="password" name='password' onChange={handleChange}
                                value={user.password || ""}
                                 className="form-control"  />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Form
