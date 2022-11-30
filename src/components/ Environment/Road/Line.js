import { React } from 'react';

const Line = ({ height, width, x, y }) =>
	<div>
		<div
			className="roadLines"
			style={
				{
					width: `${ width }px`,
					height: `${ height }px`,
					transform: `translate(${ x }%,${ y }px)`,
					position: 'absolute',
				}
			}
		/>
	</div>;

export default Line;
