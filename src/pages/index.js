import React from 'react';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { DashboardLayout } from '../components/dashboard-layout';
import {BarGraph} from "../components/graphs/bar-graph"
import {PieGraph } from '../components/graphs/pie-graph';
import {useSelector,useDispatch} from "react-redux";
import {getGraphBar,getGraphLine} from "../redux/graphs/graphSlice";
import {getEmployeeGraphBar} from "../redux/employeeGraph/employeeGraphSlice"

const Dashboard = () => {


  let dispatch = useDispatch()
  let graphsData = useSelector((state) => state.EmployeeGraph)
  const [startDate, setStartDate] = React.useState('')
  const [endDate, setEndDate] = React.useState('')

  React.useEffect(() => {
    dispatch(getGraphBar({}))
    dispatch(getGraphLine({}))
    dispatch(getEmployeeGraphBar({startDate:'',endDate:'',}))
  },[])

  return (
    <>
      <Head>
        <title>
          Ming-graph
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
          <Grid
            container
            spacing={3}
          >
            
            <form action="" className="d-flex">
                <div className="form-group">
                    <label htmlFor="">Start Date</label>
                    <input type="date" onChange={(e) => {
                        setStartDate(e.target.value);
                        dispatch(getEmployeeGraphBar({startDate:e.target.value,endDate:endDate}))
                    }} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">End Date</label>
                    <input type="date" className="form-control" 
                        onChange={(e)  => {
                            setEndDate(e.target.value)
                            dispatch(getEmployeeGraphBar({startDate:startDate,endDate:e.target.value}))
                        }}
                    />
                </div>
            </form>
            {/* <Grid
              item
              lg={12}
              md={12}
              xl={9}
              xs={12}
            >
                <BarGraph 
                  data={graphsData.dataBar} 
                  loadingState={false} 
                  title="User Graphs for test"  />
            </Grid> */}
            {/* <Grid
              item
              lg={4}
              md={12}
              xl={9}
              xs={12}
            >
                <LineChart
                  data={graphsData.dataLine} 
                />
            </Grid> */}
            
            <Grid
              item
              lg={12}
              md={12}
              xl={9}
              xs={12}
            >
              
                <PieGraph 
                  data={graphsData.dataBar}
                  loadingState={false} title="User Graphs for test"
                />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
};

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
