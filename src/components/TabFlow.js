import React,{Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ScanBatch from'./ScanBatch';
import AvailableBatch from './AvailableBatch';
import TrainAPI from './TrainAPI';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


class TabFlow extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="container tab-content">
            <Tabs>
            <Tab label="Available Batch" >
              <div>
                <h2 style={styles.headline}>Below are Available scanned batches</h2>
                    <AvailableBatch/>

              </div>
            </Tab>
            <Tab label="Scan New Batch" >
              <div>
                <p>
                  <ScanBatch/>
                </p>
              </div>
            </Tab>
            <Tab label="Available API">
              <div>
                <p>
                  <TrainAPI/>
                </p>
              </div>
            </Tab>
          </Tabs>
          </div>
        )
    }
}


export default TabFlow;