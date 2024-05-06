import StayConnected from './StayConnected';
import SuggestionForm from './SuggestionForm';

const SuggestionNStayConnected = () => {
	return (
		<div className='flex flex-col md:flex-row gap-8 sm:gap-10 w-full'>
			<div className='w-full md:w-[50%] box-border'>
				<StayConnected />
			</div>
			<div className='w-full md:w-[50%] box-border'>
				<SuggestionForm />
			</div>
		</div>
	);
};

export default SuggestionNStayConnected;
