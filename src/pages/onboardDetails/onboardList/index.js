import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../../components/dashboard-layout';
import {Table}  from '../../../components/Table';
import {getOnboardDetails} from "../../../redux/onboardDetails/onboardDetails";
import {useDispatch,useSelector} from "react-redux";


const OnBoardList = () =>  {

  let dispatch = useDispatch()
  let onboardData = useSelector((state) => state.onboard)

  React.useEffect(() => {
    dispatch(getOnboardDetails({page:0}))
  },[])

  return (
    <>
      <Head>
        <title>
          Onboard Details
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
                      <h3>{onboardData.totalCount}</h3>
                </div>  
              </div>
            </div>  
          </div>
          <Table
            lengthOfData={onboardData.count}  
            paginationData={true}
            data={onboardData.data} 
            loadingState={onboardData.loading}  
            paginateApi={getOnboardDetails}
            currentData={{startDate:'',endDate:''}}
            title="Onboard Details"
            columns={[
                {
                    name: "Candidate  me",
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
                    name: "Requirement Email from GENERAL/Known Ma ger",
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
                    name: "Recruiter me",
                    label: "Recruiter Name",
                    options: {
                        filter: true,
                        sort: true,
                    }
                },
                {
                    name: "Team Lead me",
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
