import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UtilityBar from '../layout/UtilityBar';
import World from '../tabviews/World';
import Tech from '../tabviews/Tech';
import Us from '../tabviews/Us';
import Politics from '../tabviews/Politics';
import Busniess from '../tabviews/Busniess';
import Health from '../tabviews/Health';
import Sports from '../tabviews/Sports';
import Art from '../tabviews/Art';
import Fashion from '../tabviews/Fashion';
import Science from '../tabviews/Science';
import Travel from '../tabviews/Travel';
import Food from '../tabviews/Food';

const Landing = (props) => {
  return (
    <div className='landing-page'>
      <UtilityBar />
      <div className='container'>
        <div className='tab-area'>
          <Tabs>
            <TabList className='tab-list'>
              <Tab selectedClassName='active'>World</Tab>
              <Tab selectedClassName='active'>Tech</Tab>
              <Tab selectedClassName='active' className='hide-sm'>
                U.S
              </Tab>
              <Tab selectedClassName='active' className='hide-sm'>
                Politics
              </Tab>
              <Tab selectedClassName='active'>Busniess</Tab>
              <Tab selectedClassName='active' className='hide-sm'>
                Health
              </Tab>
              <Tab selectedClassName='active' className='hide-sm'>
                Sports
              </Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
                Art
              </Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
                Fashion
              </Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
                Science
              </Tab>
              <Tab
                selectedClassName='active'
                className='hide-sm hide-md hide-lg'
              >
                Travel
              </Tab>
              <Tab
                selectedClassName='active'
                className='hide-sm hide-md hide-lg'
              >
                Food
              </Tab>
            </TabList>

            <TabPanel>
              <World />
            </TabPanel>
            <TabPanel>
              <Tech />
            </TabPanel>
            <TabPanel>
              <Us />
            </TabPanel>
            <TabPanel>
              <Politics />
            </TabPanel>
            <TabPanel>
              <Busniess />
            </TabPanel>
            <TabPanel>
              <Health />
            </TabPanel>
            <TabPanel>
              <Sports />
            </TabPanel>
            <TabPanel>
              <Art />
            </TabPanel>
            <TabPanel>
              <Fashion />
            </TabPanel>
            <TabPanel>
              <Science />
            </TabPanel>
            <TabPanel>
              <Travel />
            </TabPanel>
            <TabPanel>
              <Food />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(Landing);
