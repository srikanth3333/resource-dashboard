import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {Table}  from '../../components/Table';
import {getReports} from "../../redux/reportsData/reportsSlice";
import {useDispatch,useSelector} from "react-redux";
import Moment from 'react-moment';

const ReportsList = () =>  {

  let dispatch = useDispatch()
  let reports = useSelector((state) => state.reports)
  let optionsData = useSelector((state) => state.options)
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')
  const [rel, setRel] = React.useState('')
  const [total, setTotal] = React.useState('')
  const [skill, setSkill] = React.useState('')

  React.useEffect(() => {
    dispatch(getReports({page:0,startDate:'',endDate:'',skill:'',rel:'',total:''}))
  },[])

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
          <div className="row">
            <div className="col-lg-12">
              <div className="card shadow-sm mb-4">
                <div className="card-body text-center">
                      <h2>Total</h2>
                      <h3>{reports.totalCount}</h3>
                </div>
              </div>
            </div> 
            <div className="col-lg-7 mb-4 d-flex">
              <div>
              <p>SkillSet:</p>
              <input type="text"  
                onChange={(e) => {
                  setSkill(e.target.value);
                  dispatch(getReports({startDate:startDate,endDate:endDate, skill:e.target.value, rel:rel, total: total}))
              }}
              className="form-control" placeholder="Skill set"/>
              </div>
              <div>
                <p>Relevant Experience:</p>
                
                <input type="text" 
                  onChange={(e) => {
                      setRel(e.target.value);
                      dispatch(getReports({startDate:startDate,endDate:endDate, rel:e.target.value, total:total,skill:skill,}))
                  }}
                  className="form-control" placeholder="Relevant Experience"/>
              </div>
              <div>
                <p>Total Experience: </p>
                
                <input type="text" 
                  onChange={(e) => {
                    setTotal(e.target.value);
                    dispatch(getReports({startDate:startDate,endDate:endDate, total:e.target.value,rel:rel,skill:skill }))
                  }}
                  className="form-control" placeholder="Total Experience"/>
              </div>
            </div> 
            <div className="col-lg-5">
                <form action="" className="d-flex">
                    <div className="form-group">
                        <label htmlFor="">Start Date</label>
                        <input type="date" onChange={(e) => {
                            setStartDate(e.target.value);
                            dispatch(getReports({startDate:e.target.value,endDate:endDate,total:total,rel:rel,skill:skill}))
                        }} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">End Date</label>
                        <input type="date" className="form-control" 
                            onChange={(e)  => {
                                setEndDate(e.target.value)
                                dispatch(getReports({startDate:startDate,endDate:e.target.value,total:total,rel:rel,skill:skill}))
                            }}
                        />
                    </div>
                </form>
            </div>
          </div>
          <Table
        //   options={options}
           lengthOfData={reports.count}  
           paginationData={true}
           data={reports.data} 
           loadingState={reports.loading}  
           paginateApi={getReports}
           currentData={{startDate:startDate,endDate:endDate,total:total,rel:rel,skill:skill}}
           title="Reports List"
          columns={
            [
                          {
                              name: "Timestamp",
                              label: "Time",
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
                              name: "Email Address",
                              label: "Email Address",
                              options: {
                                  filter: true,
                                  sort: true,
                              }
                          },
                          {
                            name: "Vendor Name",
                            label: "Vendor Name",
                            options: {
                                filter: true,
                                sort: true,
                            }
                        },
                        {
                          name: "Candiate Name",
                          label: "Candiate Name",
                          options: {
                              filter: true,
                              sort: true,
                          }
                      },
                      {
                        name: "Pan/Aadhar No",
                        label: "Pan/Aadhar No",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },                {
                              name: "Contact No.",
                              label: "Contact No.",
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
                            name: "Total Exp",
                            label: "Total Exp",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Rel Exp",
                            label: "Rel Exp",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Current Company",
                            label: "Current Company",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Current Work Location",
                            label: "Current Work Location",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Preferred Work Location",
                            label: "Preferred Work Location",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Email ID",
                            label: "Email ID",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Notice Period",
                            label: "Notice Period",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "GAP (If Any)",
                            label: "GAP (If Any)",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Telephonic Round -Date",
                            label: "Telephonic Round -Date",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Telephonic Round -Time",
                            label: "Telephonic Round -Time",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Category",
                            label: "Category",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Bill RATE",
                            label: "Bill RATE",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "RMG SPOC NAME",
                            label: "RMG SPOC NAME",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "RMG Email ID",
                            label: "RMG Email ID",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "For the Date of submission",
                            label: "For the Date of submission",
                            options: {
                                filter: true,
                                sort: true,
                            }
                          },
                          {
                            name: "Resume",
                            label: "Resume",
                            options: {
                                filter: true,
                                sort: true,
                                customBodyRender: (val) => {
                                  return (
                                    <>
                                      <a href={val} rel="noopener">View Resume</a>
                                    </>
                                  )
                                }
                            }
                          },

            ]
          }
            
          />
        </Container>
      </Box>
    </>
  );
}
ReportsList.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default ReportsList;
