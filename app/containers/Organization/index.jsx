import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import axios from 'axios';
import Searchbar from '../../components/Searchbar/Searchbar';
import OrgDetails from './OrgDetails';
import OrgName from './OrgName';
import OrgPoints from './OrgPoints';
import './Organization.css';
import { getOrgs } from './redux/actions';
import { store } from './redux/store';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const list = ['NABIL', 'EBL', 'MKKBL', 'AHDC', 'NHPC', 'PLI', 'NIFRA'];

const Organiations = ({ getOrganization }) => {
  const [orgs, setOrgs] = useState([]);
  // const dispatch = useDispatch();

  const getData = () => {
    axios.get('https://api.sharebigya.com/api/v1/stock/org').then(res => {
      const data = res.data;
      setOrgs(data);
    });
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getOrganization();
  }, []);

  console.log(orgs);

  return (
    <>
      <Searchbar />
      {/* {orgs.length > 0 ? (
        <div className="container ">
          <OrgName />
          <OrgPoints />
          <OrgDetails />
        </div>
      ) : (
        <p>LOADING...</p>
      )} */}

      <div className="container ">
        <OrgName />
        <OrgPoints />
        <OrgDetails />
      </div>
    </>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  getOrganization: () => dispatch(getOrgs())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Organiations);
