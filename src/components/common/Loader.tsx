import { RotatingTriangles } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className='fixed top-0 left-0 z-[1000] h-screen w-screen bg-zinc-200/0 flex items-center justify-center'>
			<RotatingTriangles
				visible={true}
				height='80'
				width='80'
				colors={['#FFAC1C', '	#CC5500', '#FF7F50']}
				ariaLabel='rotating-triangles-loading'
			/>
		</div>
	);
};

export default Loader;
