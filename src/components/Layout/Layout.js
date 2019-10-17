import React,{Fragment} from 'react';
import './Layout.css';

const layout = (props)=>{
   
return(
    <Fragment>
    <div> TollBar, SideBar , Drawyer</div>
    <main className="Content">
        {props.children}
    </main>
    </Fragment>
);
}

export default layout;