import React, { useState } from "react";
const Contact=()=>{
    const [data, setData]= useState({
        fullName:'',
        phone:'',
        email:'',
        msg:'',
    });
    const InputEvent=(event)=>{
        //obj destructoring
        const {name,value}=event.target;
        setData((preVal)=>{
            return{...preVal,
            [name]:value,
            };
        });
    };
    const formSubmit=(event)=>{
        event.preventDefault();
        alert('you submit your form');
    };
    return(
        <>
             <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
                <div className="row my-2">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Type Name:</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter you name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Type Number:</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Pone Number"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};
export default Contact;