/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";
interface Props {

}
export const Register = (props: Props) => {
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
                                        <h1 className="h2 text-gray-900">Register Account</h1>
                                        <h2 className="h4 text-gray-900 mb-4">Please Input Your Data</h2>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-12 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="Nama"
                                                    placeholder="Nama Anda" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Anda" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-12">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleNumberPhone" placeholder="Nomor Handphone Anda" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <a className="btn btn-primary btn-user btn-block" data-toggle="modal" data-target="#exampleModal">
                                                    Submit
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <Link to="/" className="btn btn-primary btn-user btn-block">
                                                    Reset
                                                </Link>
                                            </div>
                                        </div>
                                        <hr/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Pendaftaran Berhasil</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Mohon Cek Email Anda.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}