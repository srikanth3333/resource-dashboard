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
import React from 'react';

const Dashboard = () => {


  let dispatch = useDispatch()
  let graphsData = useSelector((state) => state.graphs)
  console.log('graphsData')
  console.log(graphsData)

  React.useEffect(() => {
    dispatch(getGraphBar({}))
    dispatch(getGraphLine({}))
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
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <Budget />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCustomers />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TasksProgress />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalProfit sx={{ height: '100%' }} />
            </Grid>
            
            <Grid
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
            </Grid>
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
                  data={graphsData.dataLine}
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
