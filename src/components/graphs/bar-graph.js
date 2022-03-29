import { Card, CardContent, CardHeader, Divider,Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Chart, SeriesTemplate,ZoomAndPan,Legend, Series,
    Label, Export, CommonSeriesSettings, Title, Tooltip, } from 'devextreme-react/chart';

export const BarGraph = (props) => {
  
    const onPointClick = ({ target: point }) => {
        point.select();
    }

  return (
    <Card {...props} mt={3}>
          <CardHeader
              title="Graphical View"
          />
      <CardContent>
          {
              props.loadingState
              ?
                  <Box sx={{textAlign: 'center'}}>
                      <CircularProgress  />
                      <Typography>Loading...</Typography>
                  </Box>
              :
              
              <Chart id="chart" dataSource={props.data}>
                <Series
                  valueField="_id"
                  argumentField="count"
                  name="Skill Set"
                  type="bar"
                  color="#ffaa66" 
                  height={300}
                    width={600}
                  />
              </Chart>
            //   <Chart
            //         id="chart"
            //         palette="Soft"
            //         onPointClick={onPointClick}
            //         dataSource={props.data}
            //         >
            //         <CommonSeriesSettings
            //         valueField="oranges"
            //         argumentField="day"
            //         type="bar"
            //         ignoreEmptyPoints={true}
                    
            //         />
            //         <Tooltip 
            //         enabled={true}
            //         />
            //         <ZoomAndPan
            //         argumentAxis="both"
            //         valueAxis="both"
            //     /> 
            //     <Export  />
            //     <SeriesTemplate 
                
            //     nameField="consumerCount" />

            // </Chart>
            
          }
        
      </CardContent>
    </Card>
  );
};
