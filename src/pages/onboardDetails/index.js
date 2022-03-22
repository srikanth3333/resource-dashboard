import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {
    getOptionsCandidate,
    getOptionsContact,
    getOptionsSkillSet,
    getOptionsRgsId,
    getOptionsTentativeDOJ,
    getOptionsRmgLocation,
    getOptionsRecruiterName,
    getOptionsLocationOnboard,
    addOptValues
} from "../../redux/onboardDetails/onboardOptions"
import {useDispatch,useSelector} from "react-redux";
import Select from 'react-select';
import { useRouter } from 'next/router'
import List from "../reportsList/index"


const onboardDetails = () =>  {


  const router = useRouter()

    const [candidateName,setCandidateName] = React.useState('')
    const [contactNo,setContactNo] = React.useState('')
    const [skillSet,setSkillSet] = React.useState('')
    const [rgsId,setRgsId] = React.useState('')
    const [tentativeDOJ,setTentativeDOJ] = React.useState('')
    const [rmgLocation,setRmgLocation] = React.useState('')
    const [recruiterName,setRecruiterName] = React.useState('')
    const [locationOnboard,setLocationOnboard] = React.useState('')

  let dispatch = useDispatch()
  let optionsData = useSelector((state) => state.onboardOption)
  const optionsCandidate = optionsData && optionsData.candidateNameArr ? optionsData.candidateNameArr : []
  const optionsContact = optionsData && optionsData.contactNoArr ? optionsData.contactNoArr : []
  const optionsSkillSet = optionsData && optionsData.skillSetArr ? optionsData.skillSetArr : []
  const optionsRgsId = optionsData && optionsData.rgsIdArr ? optionsData.rgsIdArr : []
  const optionsTentative = optionsData && optionsData.tentativeDOJArr ? optionsData.tentativeDOJArr : []
  const optionsLocation = optionsData && optionsData.rmgLocationArr ? optionsData.rmgLocationArr : []
  const optionsName = optionsData && optionsData.recruiterNameArr ? optionsData.recruiterNameArr : []
  const optionsLocationOn = optionsData && optionsData.locationOnboardArr ? optionsData.locationOnboardArr : []

  React.useEffect(() => {
    dispatch(getOptionsCandidate({}))
    dispatch(getOptionsContact({}))
    dispatch(getOptionsSkillSet({}))
    dispatch(getOptionsRgsId({}))
    dispatch(getOptionsTentativeDOJ({}))
    dispatch(getOptionsRmgLocation({}))
    dispatch(getOptionsRecruiterName({}))
    dispatch(getOptionsLocationOnboard({}))
  },[dispatch])

  

  const handleSubmit = () => {
    dispatch(addOptValues({
        candidateName:candidateName,
        contactNo:contactNo,
        skillSet:skillSet,
        rgsId:rgsId,
        tentativeDOJ:tentativeDOJ,
        rmgLocation:rmgLocation,
        recruiterName:recruiterName,
        locationOnboard:locationOnboard,
    }))
    router.push('/onboardDetails/onboardList')
  }

  return (
    <>
      <Head>
        <title>
          Reports
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <div className="card">
              <div className="card-body">
                  <div className="row">
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Candidate Name</label>
                              <Select 
                                    options={optionsCandidate} 
                                    onChange={(val) => {
                                        setCandidateName(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Contact Number</label>
                              <Select 
                                    options={optionsContact} 
                                    onChange={(val) => {
                                        setContactNo(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Skill Set</label>
                              <Select 
                                    options={optionsSkillSet} 
                                    onChange={(val) => {
                                        setSkillSet(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Rgs Id</label>
                              <Select 
                                    options={optionsRgsId} 
                                    onChange={(val) => {
                                        setRgsId(val.value)
                                    }}
                                />
                            </div>
                      </div>
                      <div className="col-lg-4 mt-3">
                            <div className="form-groy">
                              <label>Select Rmg Location</label>
                              <Select 
                                    options={optionsLocation} 
                                    onChange={(val) => {
                                        setRmgLocation(val.value)
                                    }}
                                />
                            </div>
                      </div>  
                      <div className="col-lg-4 mt-3">
                            <div className="form-groy">
                              <label>Select Recruiter Name</label>
                              <Select 
                                    options={optionsName} 
                                    onChange={(val) => {
                                        setRecruiterName(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4 mt-3 ms-3">
                            <div className="form-groy">
                              <label>Select Location Onboard</label>
                              <Select 
                                    options={optionsLocationOn} 
                                    onChange={(val) => {
                                        setLocationOnboard(val.value)
                                    }}
                                />
                            </div>
                      </div>  
                      <div className="col-lg-12 text-end">
                          <button onClick={() => handleSubmit()}className="btn btn-success">Filter Data</button>
                      </div>
                  </div>
              </div>
          </div>
          
        </Container>
      </Box>
    </>
  );
}
onboardDetails.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default onboardDetails;
