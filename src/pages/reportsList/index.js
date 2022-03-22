import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {Table}  from '../../components/Table';
import {getReports} from "../../redux/reportsData/reportsSlice";
import {useDispatch,useSelector} from "react-redux";


const ReportsList = () =>  {

  let dispatch = useDispatch()
  let reports = useSelector((state) => state.reports)

  React.useEffect(() => {
    dispatch(getReports({page:0}))
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
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body text-center">
                      <h2>Total</h2>
                      <h3>{reports.totalCount}</h3>
                </div>  
              </div>
            </div>  
          </div>
          <Table
        //   options={options}
           lengthOfData={reports.count}  
           paginationData={true}
           data={reports.data} 
           loadingState={reports.loading}  
           paginateApi={getReports}
           currentData={{startDate:'',endDate:''}}
           title="Reports List"
          columns={
            [
                          {
                              name: "Timestamp",
                              label: "Time",
                              options: {
                              filter: true,
                              sort: true,
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
