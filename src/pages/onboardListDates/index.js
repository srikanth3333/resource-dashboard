import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {Table}  from '../../components/Table';
import {getOnboardDetailsDate} from "../../redux/onboardDetails/onboardDetailDates";
import {useDispatch,useSelector} from "react-redux";
import Moment from 'react-moment';
import DatePicker from 'react-datepicker';


const OnBoardList = () =>  {

  let dispatch = useDispatch()
  let onboardData = useSelector((state) => state.onboardDates)
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  const [currentStatus, setCurrentStatus] = React.useState('')

  let optionsData = useSelector((state) => state.onboardOption)
  const optionsCandidate = optionsData && optionsData.candidateNameArr ? optionsData.candidateNameArr : []
  const optionsContact = optionsData && optionsData.contactNoArr ? optionsData.contactNoArr : []
  const optionsSkillSet = optionsData && optionsData.skillSetArr ? optionsData.skillSetArr : []

  React.useEffect(() => {
    dispatch(getOnboardDetailsDate({page:0,startDate:'',endDate:'',currentStatus:''}))
  },[dispatch])

  const clearFilters = () => {
    setStartDate('')
    setEndDate('')
    setCurrentStatus('')
    dispatch(getOnboardDetailsDate({page:0,startDate:'',endDate:'',currentStatus:''}))
  }


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
                        <div className="col-lg-2">
                            <h2>Total List</h2>
                            <h3>{onboardData.totalCount}</h3>
                        </div>
                        <div className="col-lg-6">
                            <form action="" className="d-flex">
                                <div className="form-group">
                                    <label htmlFor="">Start Date</label>
                                        <DatePicker dateFormat='dd/MM/yyyy' 
                                            placeholderText='DD/MM/YYYY' 
                                            selected={startDate} 
                                            onChange={(date) => {
                                                setStartDate(date);
                                                dispatch(getOnboardDetailsDate({startDate:date,endDate:endDate,currentStatus:currentStatus}))
                                            }} 
                                        />
                                    {/* <input type="date" onChange={(e) => {
                                        setStartDate(e.target.value);
                                        dispatch(getOnboardDetailsDate({startDate:e.target.value,endDate:endDate,currentStatus:currentStatus}))
                                    }} className="form-control" /> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">End Date</label>
                                        <DatePicker dateFormat='dd/MM/yyyy' 
                                            placeholderText='DD/MM/YYYY' 
                                            selected={endDate} 
                                            onChange={(date) => {
                                                setEndDate(date)
                                                dispatch(getOnboardDetailsDate({startDate:startDate,endDate:date,currentStatus:currentStatus}))
                                            }} 
                                        />
                                    {/* <input type="date" className="form-control" 
                                        onChange={(e)  => {
                                            setEndDate(e.target.value)
                                            dispatch(getOnboardDetailsDate({startDate:startDate,endDate:e.target.value,currentStatus:currentStatus}))
                                        }}
                                    /> */}
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="">Current Status</label>
                            {/* <input type="text" className="form-control" placeholder="Current status" 
                                onChange={(e)  => {
                                    setCurrentStatus(e.target.value)
                                    dispatch(getOnboardDetailsDate({startDate:startDate,endDate:endDate,currentStatus:e.target.value}))
                                }}
                            /> */}
                            <select class="form-select" aria-label="Default select example"
                                  onChange={(e)  => {
                                    setCurrentStatus(e.target.value)
                                    dispatch(getOnboardDetailsDate({startDate:startDate,endDate:endDate,currentStatus:e.target.value}))
                                }}  
                            >
                                <option selected value="">Open this select menu</option>
                                <option value="On-boarded">On-boarded</option>
                                <option value="Dropped-FTE Offer In-Hand">Dropped-FTE Offer In-Hand</option>
                                <option value="Dropped-Late Response">Dropped-Late Response</option>
                                <option value="Dropped-Continue with existing company">Dropped-Continue with existing company</option>
                                <option value="Dropped-Medical Issue">Dropped-Medical Issue</option>
                                <option value="Dropped-Fake">Dropped-Fake</option>
                                <option value="FTE">FTE</option>
                                <option value="Awaiting for EMP ID BGC cleared yet to submit to RMG">Awaiting for EMP ID BGC cleared yet to submit to RMG</option>
                                <option value="Dropped-Wedding BGC need to resubmit">Dropped-Wedding BGC need to resubmit</option>
                                <option value="Dronned-Not Answered">Dronned-Not Answered</option>
                                <option value="Waiting for candidate confirmation to EMP ID">Waiting for candidate confirmation to EMP ID</option>
                                <option value="Dropped-Non Local">Dropped-Non Local</option>
                                <option value="RGS ID is not active">RGS ID is not active</option>
                                <option value="Dropped-Not Interested">Dropped-Not Interested</option>
                                <option value="Need to source to another RMG">Need to source to another RMG</option>
                                <option value="Dropped-High Pay Expected Waiting for RGS ID">Dropped-High Pay Expected Waiting for RGS ID</option>
                                <option value="Dropped-Other Offer Dropped-Distance mode of Edu BGC submitted Dropped-Not releaving from current company">Dropped-Other Offer Dropped-Distance mode of Edu BGC submitted Dropped-Not releaving from current company</option>
                                <option value="Waiting for TCS confirmation about ETE">Waiting for TCS confirmation about ETE</option>
                                <option value="Dropped- CE Rejected">Dropped- CE Rejected</option>
                                <option value="Awaiting for approval">Awaiting for approval</option>
                                <option value="Documents in Progress">Documents in Progress</option>
                                <option value="CE Initiated">CE Initiated</option>
                            </select>
                        </div>
                        <div className="col-lg-2">
                            <button className="btn btn-success mb-3"onClick={() => clearFilters()}>Clear Filters</button>
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
                    name: "Candidate Name",
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
                    name: "Current Status",
                    label: "Current Status",
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
                    name: "Recruiter Name",
                    label: "Recruiter Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Team Lead Name",
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
