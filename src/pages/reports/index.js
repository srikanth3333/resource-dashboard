import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../../components/dashboard-layout';
import {getOptions,
  getOptionsExpRel,
  getOptionsExpTotal,
  getOptionsnotPeriod,
  getOptionsPreWorkLoc,
  getOptionsCategory,
  addOptValues
} from "../../redux/reportsData/optionSlice"
import {useDispatch,useSelector} from "react-redux";
import Select from 'react-select';
import { useRouter } from 'next/router'


const Customers = () =>  {


  const router = useRouter()

  const [skill,setSkill] = React.useState('')
  const [rel,setRel] = React.useState('')
  const [total,setTotal] = React.useState('')
  const [notice,setNotice] = React.useState('')
  const [preLoc,setPreLoc] = React.useState('')
  const [category,setCategory] = React.useState('')

  let dispatch = useDispatch()
  let optionsData = useSelector((state) => state.options)
  const options = optionsData && optionsData.skillSet ? optionsData.skillSet : []
  const optionsRel = optionsData && optionsData.experienceRel ? optionsData.experienceRel : []
  const optionsTotal = optionsData && optionsData.experienceTotal ? optionsData.experienceTotal : []
  const optionsNot = optionsData && optionsData.noticePeriod ? optionsData.noticePeriod : []
  const optionsWrkLoc = optionsData && optionsData.preWorkLoc ? optionsData.preWorkLoc : []
  const optionsCat = optionsData && optionsData.category ? optionsData.category : []

  React.useEffect(() => {
    dispatch(getOptions({}))
    dispatch(getOptionsExpTotal({}))
    dispatch(getOptionsnotPeriod({}))
    dispatch(getOptionsExpRel({}))
    dispatch(getOptionsPreWorkLoc({}))
    dispatch(getOptionsCategory({}))
  },[])

  const handleSubmit = () => {
    dispatch(addOptValues({
      skill:skill,
      rel:rel,
      total:total,
      notice:notice,
      preLoc:preLoc,
      categoryValue:category
    }))
    router.push('/reportsList')
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
                              <label>Select Skill Set</label>
                              <Select 
                                    options={options} 
                                    onChange={(val) => {
                                      setSkill(val.value)
                                      console.log(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Relevant Experience</label>
                              <Select 
                                    options={optionsRel} 
                                    onChange={(val) => {
                                      setRel(val.value)
                                      console.log(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Total Experience</label>
                              <Select 
                                    options={optionsTotal} 
                                    onChange={(val) => {
                                      setTotal(val.value)
                                      console.log(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Notice Period</label>
                              <Select 
                                    options={optionsNot} 
                                    onChange={(val) => {
                                      setNotice(val.value)
                                      console.log(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4">
                            <div className="form-group">
                              <label>Select Prefferred Work Location</label>
                              <Select 
                                    options={optionsWrkLoc} 
                                    onChange={(val) => {
                                      setPreLoc(val.value)
                                      console.log(val.value)
                                    }}
                                />
                            </div>
                      </div> 
                      <div className="col-lg-4 mt-3">
                            <div className="form-groy">
                              <label>Select Category</label>
                              <Select 
                                    options={optionsCat} 
                                    onChange={(val) => {
                                      setCategory(val.value)
                                      console.log(val.value)
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
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);


export default Customers;
