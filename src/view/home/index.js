import GridViewIcon from '@mui/icons-material/GridView';
import './index.css';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";




function Home() {
    const [isGridActive,setIsGridActive]=useState(true);
    function toggleView(){
        setIsGridActive(!isGridActive);
        // setViewType(isGridActive ? 'gridView' : 'listView');
        // setBoxType(isGridActive ? 'gridBox' : 'listBox');
        // setFlagType(isGridActive ? 'gridFlag' : 'listFlag');
    } 
  return (
    <div className="main-container">
        <div className="toolbar">
            <h1 className="title">
                Countrix
            </h1>
            <input title="text" placeholder="Search For Countries"></input>
        </div>

        <div className="appBar-bottom">
            <div className="view-icon">
                {!isGridActive ? <SplitscreenIcon onClick={toggleView}/> : <GridViewIcon onClick={toggleView}/>}
            </div>
            <div className='sortIcon'><SortIcon/></div>
            <span className='sortText'>Sort</span>
            <div className='filterIcon'><FilterAltIcon></FilterAltIcon></div>
            <span className='filterText'>Filter</span>
        </div>
    </div>
  );
}
export default Home;
