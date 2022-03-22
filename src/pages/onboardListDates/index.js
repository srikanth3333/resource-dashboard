import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {Table}  from '../../components/Table';
import {getOnboardDetailsDate} from "../../redux/onboardDetails/onboardDetailDates";
import {useDispatch,useSelector} from "react-redux";
import Moment from 'react-moment';
import Select from 'react-select';

const OnBoardList = () =>  {

  let dispatch = useDispatch()
  let onboardData = useSelector((state) => state.onboardDates)
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')

  let optionsData = useSelector((state) => state.onboardOption)
  const optionsCandidate = optionsData && optionsData.candidateNameArr ? optionsData.candidateNameArr : []
  const optionsContact = optionsData && optionsData.contactNoArr ? optionsData.contactNoArr : []
  const optionsSkillSet = optionsData && optionsData.skillSetArr ? optionsData.skillSetArr : []

  React.useEffect(() => {
    dispatch(getOnboardDetailsDate({page:0,startDate:'',endDate:''}))
  },[dispatch])

  return (
    <>
      <Head>
        <title>
          Onboard List
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
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 text-center">
                            <h2>Total List</h2>
                            <h3>{onboardData.totalCount}</h3>
                        </div>
                        <div className="col-lg-4">
                            <form action="" className="d-flex">
                                <div className="form-group">
                                    <label htmlFor="">Start Date</label>
                                    <input type="date" onChange={(e) => {
                                        setStartDate(e.target.value);
                                        dispatch(getOnboardDetailsDate({startDate:e.target.value,endDate:endDate}))
                                    }} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Date</label>
                                    <input type="date" className="form-control" 
                                        onChange={(e)  => {
                                            setEndDate(e.target.value)
                                            dispatch(getOnboardDetailsDate({startDate:startDate,endDate:e.target.value}))
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                        
                    </div>
                    {/* <div className="row align-items-center">
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
                                <div className="form-group justify-content-center">
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
                    </div> */}
                </div>
            </div>
          <Table
            lengthOfData={onboardData.count}  
            paginationData={true}
            data={onboardData.data} 
            loadingState={onboardData.loading}  
            paginateApi={getOnboardDetailsDate}
            currentData={{startDate:startDate,endDate:endDate}}
            title="Onboard Details"
            columns={[
                {
                    name: "Candidate name",
                    label: "Candidate Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Contact No",
                    label: "Contact No",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Skill Set",
                    label: "Skill Set",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "RGS ID",
                    label: "RGS ID",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Tentative DOJ",
                    label: "Tentative DOJ",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (val) => {
                            return (
                                <>
                                    <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                    <Moment format="hh:mm:ss A">{val}</Moment>
                                </>
                            )
                        }
                    }
                },
                {
                    name: "EMP ID",
                    label: "EMP ID",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "DOJ",
                    label: "DOJ",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },  
                {
                    name: "Date of source",
                    label: "Date of source",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },  
                {
                    name: "Date of selection",
                    label: "Date of selection",
                    options: {
                        filter: true,
                        sort: true,
                        customBodyRender: (val) => {
                            return (
                                <>
                                    <Moment format="DD/MM/YYYY">{val}</Moment> <br />
                                    <Moment format="hh:mm:ss A">{val}</Moment>
                                </>
                            )
                          }
                    }
                }, 
                {
                    name: "RMG",
                    label: "RMG",
                    options: {
                        filter: true,
                        sort: true,
                    }
                }, 
                {
                    name: "TCS Account/ISU",
                    label: "TCS Account/ISU",
                    options: {
                        filter: true,
                        sort: true,
                    }
                }, 
                {
                    name: "RMG Location",
                    label: "RMG Location",
                    options: {
                        filter: true,
                        sort: true,
                    }
                }, 
                {
                    name: "Requirement Email from GENERAL/Known Manager",
                    label: "Requirement Email from GENERAL/Known Manager",
                    options: {
                        filter: true,
                        sort: true,
                    }
                }, 
                {
                    name: "TCS RATE CARD",
                    label: "TCS RATE CARD",
                    options: {
                        filter: true,
                        sort: true,
                    }
                }, 
                {
                    name: "Pay RATE",
                    label: "Pay RATE",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "TCS APPROVED RATE CARD",
                    label: "TCS APPROVED RATE CARD",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Margin",
                    label: "Margin",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "BGC Cleared Date",
                    label: "BGC Cleared Date",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "BGC SPOC",
                    label: "BGC SPOC",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Location of On-board",
                    label: "Location of On-board",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Recruiter  name",
                    label: "Recruiter Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Team Lead  name",
                    label: "Team Lead Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "TOI-Spoc",
                    label: "TOI-Spoc",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
            ]}
          />
        </Container>
      </Box>
    </>
  );
}
OnBoardList.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default OnBoardList;
