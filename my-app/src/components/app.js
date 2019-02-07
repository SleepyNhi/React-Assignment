import React from 'react';
import {connect} from 'react-redux';
import GetList from '../components/getList';

const mapStateToProps = state => {
    return { 
        showModal: state.showModal
        
    }
}

class List extends React.Component {

 

    render(){
        
        return(
            <div>
               {console.log(this.props.showModal)}

                <h1>TimeSlots</h1>
                   <GetList />
                <div>
                    
                </div>  
            </div>   
        )
    }
}

const App = connect (mapStateToProps)(List);


export default App;