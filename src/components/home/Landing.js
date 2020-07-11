import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UtilityBar from '../layout/UtilityBar';

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
              <Tab selectedClassName='active'>Politics</Tab>
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
                Books
              </Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
                Science
              </Tab>
              <Tab selectedClassName='active' className='hide-sm hide-md'>
                Travel
              </Tab>
              <Tab selectedClassName='active' className='hide-sm'>
                Food
              </Tab>
            </TabList>

            <TabPanel>
              <h2>Any content 1</h2>
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

Landing.propTypes = {};

export default connect(null)(Landing);
