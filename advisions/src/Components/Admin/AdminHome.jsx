import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideNavbar from './SideNavbar';

export default function AdminHome() {
    var [user, setuser] = useState({})
    var navigate = useNavigate()
    useEffect(() => {
        async function getAPIData() {
            var response = await fetch("/api/user/admin/" + localStorage.getItem("userid"), {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            });
            response = await response.json();
            if (response.result === "Done")
                setuser(response.data);
            else
                navigate("/login");
        }
    
        getAPIData();
    }, [navigate]);
     return (
        <>
            {/* Hero Section */}
            <div className="container-fluid pt-5 bg-primary hero-header">
                {/* Hero Content */}
            </div>

            {/* Full Screen Search Modal */}
            {/* Sidebar and Profile Section */}
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-3 col-12">
                        <SideNavbar />
                    </div>
                    <div className="col-md-9 col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={user.pic ? `/public/users/${user.pic}` : `/assets/img/team-1.jpg`} height="350px" width="100%" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h5 className="text-center bg-primary p-2">Admin Profile</h5>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Username</th>
                                            <td>{user.username}</td>
                                        </tr>
                                        <tr>
                                            <th>Role</th>
                                            <td>Admin</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{user.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{user.phone}</td>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}><Link to="/update-profile" className="btn btn-primary w-100">Update Profile</Link></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
