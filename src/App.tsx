import React from 'react';
import { connect } from 'react-redux';
// import {fetchGithubData} from './actions/index'
// import{FetchActionTypes} from './actions/types'

// interface AppProps {
// 	fetchGithubData: typeof FetchActionTypes;
	
//   }
function App(){
	// console.log(state)
	const clickhandler=()=>{
		// dispatchEvent(fetchGithubData)
	}

		return (
			<div>
				<h1>Hello World!!</h1>
				<button onClick={clickhandler}>hello</button>
			</div>
		);
	}


const mapStateToProps = (state:any) => {
	console.log("hello",state)
	return {
	  data: state.data
	};
  };
  
  export default connect(
	mapStateToProps,
	null
  )(App);