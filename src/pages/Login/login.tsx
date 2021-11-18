/* eslint-disable jsx-a11y/anchor-is-valid */

interface Props {

}
export const Login = (props: Props) => {
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
                                        <h1 className="h2 text-gray-900">Selamat Datang Guest</h1>
                                        <h2 className="h4 text-gray-900">Verifikasi Akun Anda sekarang </h2>
                                        <h3 className="h6 text-gray-900 mb-4">Untuk bisa menggunakan Digital Sign</h3>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="namaDepan"
                                                    placeholder="Nama Depan Anda"/>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="namaDepan"
                                                    placeholder="Nama Belakang Anda"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleKTP"
                                                placeholder="No KTP Anda"/>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-4 mb-3 mb-sm-0">
                                                <label htmlFor="exampleFormControlFile1">Upload Foto</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                            </div>
                                            <div className="col-sm-4">
                                                <label htmlFor="exampleFormControlFile1">Upload Selfie</label>
                                                <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                                            </div>
                                            <div className="col-sm-4">
                                                <a href="#" className="btn btn-primary btn-user btn-block">
                                                    Connect Sosmed
                                                </a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Tanda Tangan</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <a className="btn btn-primary btn-user btn-block" data-toggle="modal"
                                                    data-target="#exampleModal">
                                                    Verifikasi
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="" className="btn btn-primary btn-user btn-block">
                                                    Reset
                                                </a>
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
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Verifikasi Berhasil</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Selamat, anda sudah terverifikasi !</p>
                            <p>Anda mendapatkan kredit ttd digital 30 poin.</p>
                        </div>
                        <div className="modal-footer">
                            <a href="index.html" className="btn btn-primary btn-user btn-block">
                                Sign Now!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}