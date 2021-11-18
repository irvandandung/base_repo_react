/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h2 text-gray-900">Sign Document with Digital Signature</h1>
                                        <h2 className="h4 text-gray-900 mb-4">With validity equivalent to a traditional signature
                                        </h2>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <a className="btn btn-primary btn-user btn-block" data-toggle="modal"
                                                    data-target="#exampleModal">
                                                    Login
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <Link to="register" className="btn btn-primary btn-user btn-block">
                                                    Register
                                                </Link>
                                            </div>
                                        </div>
                                        <hr />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Masukan email dan password anda</p>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleEmail"
                                        placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user" id="examplePassword"
                                        placeholder="Password" />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <a href="login.html" className="btn btn-primary btn-user btn-block">
                                            Submit
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="" className="btn btn-primary btn-user btn-block">
                                            Reset
                                        </a>
                                    </div>
                                </div>
                                <hr />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}