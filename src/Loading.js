import React from 'react';
import loading from './misc/loading.png';
import { LoadingStyle, LoadingImgStyle } from './Styles';

const Loading = () => (
	<div style={LoadingStyle}>
		<img src={loading} style={LoadingImgStyle} alt='loading' />
	</div>
)
  
export default Loading;