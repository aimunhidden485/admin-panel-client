import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/featured/Featured';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DataTable from '../../Components/Table/DataTable';
import Widget from '../../Components/widget/Widget';
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
           <Sidebar/>
           <div className="homeContainer">
           <Navbar/>
           <div className="widgets">
           <Widget type="user"/>
           <Widget type="order"/>
           <Widget type="earning"/>
           <Widget type="balance"/>
           </div>
           <div className="charts">
            <Featured/>
            <Chart title="Last six months revenue"/>
           </div>
           <div className="listContainer">
           <div className="listTitle">
            Latest Transactions
            <DataTable/>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Home;