import React, { useState } from 'react';
import axios from 'axios'
import Colors from '../assets/Colors';


function ProfilePanel({ user }) {

    axios.defaults.baseURL = 'http://www.localhost:3001'

    const [loginEr, setLoginEr] = useState("")
    const changePassword = () => {
        const oldPass = (document.getElementById('oldPassword').value)
        const newPass = (document.getElementById('newPassword').value)

        const formData = { email: user.email, oldpassword: oldPass, newpassword: newPass }

        axios.post('/auth/changePassword', formData).then((res) => {
            if (res.data.error)
                setLoginEr(res.data.error)
            else {
                setLoginEr(res.data.message)
                document.getElementById("passwordForm").reset();
            }
        })
    }

    const user_info = JSON.parse(localStorage.getItem("user_info"))

    return (
        <div className="timeline">

            <div className="container">
                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 className="mb-2" style={{ color: '#4366B5' }}> Personal Details</h6>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder={user.first_name} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" className="form-control" id="lastName" placeholder={user.last_name} disabled />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="eMail">Email</label>
                                            <input type="email" className="form-control" id="eMail" placeholder={user.email} disabled />
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="gender">Gender</label>
                                            <input type="text" className="form-control" id="gender" placeholder={user_info.gender} disabled />
                                        </div>
                                    </div>
                                </div>

                                <form id="passwordForm">

                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 className="mt-3 mb-2" style={{ color: '#4366B5' }}>Change Password</h6>
                                            {loginEr && <h5 style={{ color: Colors.lightred, marginTop: "3px", fontSize: 15 }}>{loginEr}</h5>}
                                        </div>


                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="oldPassword" required={true} minLength="6" placeholder="Old Password" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="newPassword" required={true} minLength="6" placeholder="New Password" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row gutters">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="text-center">
                                                <button type="button" id="submit" name="submit" onClick={changePassword} className="btn btn-primary" style={{ color: '#ffffff', backgroundColor: '#4366B5' }} >Update</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePanel;