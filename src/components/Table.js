import {useState} from 'react';
import { Card, CardContent, CardHeader, Divider,Box, Typography, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import dynamic from 'next/dynamic';
import CircularProgress from '@mui/material/CircularProgress';
import {useDispatch, useSelector} from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';



const MUIDataTable = dynamic(() => import('mui-datatables'), { ssr: false });

export const Table = (props) => {
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")
    const [page,setPage] = useState(0)
    let dispatch = useDispatch()
    const router = useRouter()

    if (process.browser) {
      document.addEventListener("DOMContentLoaded", function () {
         alert('Finished loading');
       });
     }

    const columns = props.columns;
    const data = props.data;

    let options = {};
    if(props.paginationData == true) {
      options = {
        filterType: 'checkbox',
        filter: false,
        download: false,
        print: false,
        filterArrayFullMatch: true,
        selectableRows:false,
        responsive: "stacked",
        search: false,
        serverSide: true,
        count: page * 20 + props.lengthOfData + 1,
        page: page,
        rowsPerPage: 20,
        rowsPerPageOptions: [20],
        onTableChange: (action, tableState) => {
          switch (action) {
            case "changePage":
              setPage(tableState.page)
              dispatch(props.paginateApi({...props.currentData,page:tableState.page,startDate:props.currentData.startDate,endDate:props.currentData.endDate}))
              break;
          }
        },
        // customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage, textLabels) => {
        //   return (
        //     <CustomFooter
        //       count={count}
        //       page={page}
        //       rowsPerPage={rowsPerPage}
        //       changeRowsPerPage={changeRowsPerPage}
        //       changePage={changePage}
        //       textLabels={textLabels}
        //     />
        //   );
        // },
      };
    }else {
      options = {
        filterType: 'checkbox',
        selectableRows:false,
      };
    }

    

    
    
    
  
  const dateFormat = (date) => {
    let finalFormat = new Date(date)
    let string = `${finalFormat.getDate()}-${finalFormat.getMonth()+1}-${finalFormat.getFullYear()}`
    return string
  }
    
  return (  
  <Card {...props}>
    <CardHeader
      avatar={
        <IconButton aria-label="back"
          onClick={() => router.back()}
        >
          <ArrowBackIcon />
        </IconButton>
      }
      title={props.title}
    />
    <Divider />
    <CardContent> 
      
      {
        props.dateSelection 
        ?
          <>
          <Grid container spacing={2} sx={{marginBottom: '10px', justifyContent: 'flex-end'}}>
            <Grid item xs={2}>
                <label>Start Date</label>
                <input type="date" 
                  onChange={(e) => {
                    setFromDate(e.target.value)
                    // addDate({fromDate: e.target.value,toDate:toDate})
                    dispatch(props.dateSelection({
                      startDate:e.target.value,
                      endDate:toDate
                    }))
                  }}
                className="form-control" />
              
            </Grid>
            <Grid item xs={2}>
              <label>End Date</label>
                <input type="date" 
                    onChange={(e) => {
                      setToDate(e.target.value)
                      // addDate({fromDate: fromDate,toDate:e.target.value})
                      dispatch(props.dateSelection({
                        startDate:fromDate,
                        endDate:e.target.value
                      }))
                    }}
                  className="form-control" />
              
            </Grid>
          </Grid>
            
            
          </>
         :
         null
      }
         
        {
            props.loadingState
            ?
                <Box sx={{textAlign: 'center'}}>
                    <CircularProgress  />
                    <Typography>Loading...</Typography>
                </Box>
            :
            <MUIDataTable
                data={data}
                columns={columns}
                options={options}
            />
        }
      
    </CardContent>
  </Card>
    
  );
};
