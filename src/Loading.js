import React from 'react';
import loading from './misc/loading.png';
import { LoadingStyle, LoadingImg } from './Styles';

const Loading = () => (
	<div style={LoadingStyle}>
		<img src={loading} style={LoadingImg} alt='loading' />
	</div>
)
  
export default Loading;