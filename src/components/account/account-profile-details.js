import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import axios from 'axios'

export const AccountProfileDetails = (props) => {
  

  const [timestamp,setTimestamp] = useState('')
  const [email,setEmail] = useState('')
  const [venName,setVenName] = useState('')
  const [canName,setCanName] = useState('')
  const [pan,setPan] = useState('')
  const [contact,setContact] = useState('')
  const [skill,setSkill] = useState('')
  const [total,setTotal] = useState('')
  const [relevant,setRelevant] = useState('')
  const [current,setCurrent] = useState('')
  const [work,setWork] = useState('')
  const [preferred,setpreferred] = useState('')
  const [emailUser,setEmailUser] = useState('')
  const [notices,setNotices] = useState('')
  const [gap,setGap] = useState('')
  const [teleData,setTeleData] = useState('')
  const [teleTime,setTeleTime] = useState('')
  const [category,setCategory] = useState('')
  const [bill,setBill] = useState('')
  const [resume,setResume] = useState('')
  const [rmgSpoc,setRmgSpoc] = useState('')
  const [rmgEmail,setRmgEmail] = useState('')
  const [submission,setSubmission] = useState('')


  const handleChange = (event) => {
    event.preventDefault();
    let data = {
        "Timestamp" : timestamp,
        "Email Address" : email,
        "Vendor Name" : venName,
        "Candiate Name" : canName,
        "Pan/Aadhar No" : pan,
        "Contact No." : contact,
        "Skill Set" : skill,
        "Total Exp" : total,
        "Rel Exp" : relevant,
        "Current Company" : current,
        "Current Work Location" : work,
        "Preferred Work Location" : preferred,
        "Email ID" : emailUser,
        "Notice Period" : notices,
        "GAP (If Any)" : gap,
        "Telephonic Round -Date" : teleData,
        "Telephonic Round -Time" : teleTime,
        "Category" : category,
        "Bill RATE" : bill,
        "Resume" : resume,
        "RMG SPOC NAME" : rmgSpoc,
        "RMG Email ID" : rmgEmail,
        "For the Date of submission" : submission
    }

    axios.post("http://localhost:7000/api/addReport", data)
    .then(res => {
      if(res.data.status == true) {
        alert("Added Successfully")
      }

    })
    .catch(err => alert("some error occured try again later"))
  };

  return (
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Add Report Details"
        />
        <Divider />
        <CardContent>
          <form  className="row" onSubmit={handleChange}>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Timestamp</label>
                  <input type="date" required onChange={(e) => setTimestamp(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Email Address</label>
                  <input type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Vendor Name</label>
                  <input type="text" required onChange={(e) => setVenName(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Candiate Name</label>
                  <input type="text" required onChange={(e) => setCanName(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Pan/Aadhar No</label>
                  <input type="text" required onChange={(e) => setPan(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Contact No</label>
                  <input type="number" required onChange={(e) => setContact(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Skill Set</label>
                  <input type="text" required onChange={(e) => setSkill(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Total Exp</label>
                  <input type="text" required onChange={(e) => setTotal(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Rel Exp</label>
                  <input type="text" required onChange={(e) => setRelevant(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Current Company</label>
                  <input type="text" required onChange={(e) => setCurrent(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Current Work Location</label>
                  <input type="text" required onChange={(e) => setWork(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Preferred Work Location</label>
                  <input type="text" required onChange={(e) => setpreferred(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Email ID</label>
                  <input type="email" required onChange={(e) => setEmailUser(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Notice Period</label>
                  <input type="text" required onChange={(e) => setNotices(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">GAP (If Any)</label>
                  <input type="text" required onChange={(e) => setGap(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Telephonic Round -Date</label>
                  <input type="date" required onChange={(e) => setTeleData(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Telephonic Round -Time</label>
                  <input type="date" required onChange={(e) => setTeleTime(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Category</label>
                  <input type="text" required onChange={(e) => setCategory(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Bill RATE</label>
                  <input type="text" required onChange={(e) => setBill(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">Resume Url</label>
                  <input type="url" required onChange={(e) => setResume(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">RMG SPOC NAME</label>
                  <input type="text" required onChange={(e) => setRmgSpoc(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">RMG Email ID</label>
                  <input type="text" required onChange={(e) => setRmgEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-4">
                  <label htmlFor="">For the Date of submission</label>
                  <input type="date" required onChange={(e) => setSubmission(e.target.value)} className="form-control" />
            </div>
            <div className="form-group col-lg-12 text-end">
                  <button type="submit" className="btn btn-success">Save Details</button>
            </div>
          </form>
        </CardContent>
      </Card>
    
  );
};
