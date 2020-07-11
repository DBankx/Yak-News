import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UtilityBar from '../layout/UtilityBar';
import World from '../tabviews/World';
import Trending from '../tabviews/Trending';

const Landing = (props) => {
  return (
    <div className='landing-page'>
      <UtilityBar />
      <div className='container'>
        <div className='tab-area'>
          <Tabs>
            <TabList className='tab-list'>
              <Tab selectedClassName='active'>Trending</Tab>
              <Tab selectedClassName='active'>World</Tab>
              <Tab selectedClassName='active'>Tech</Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
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
              <Trending />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(Landing);
