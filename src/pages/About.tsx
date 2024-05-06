import FindUs from '@/components/About/FindUs';
import Team from '@/components/About/Team';
import MainLayout from '@/layouts/MainLayout';
import SuggestionNStayConnected from '@/components/About/SuggestionNStayConnected';

const About = () => {
	return (
		<MainLayout
			name='About'
			className='flex items-center px-4 py-8 sm:p-10 flex-col gap-8 sm:gap-12'>
			<Team />
			<FindUs />
			<SuggestionNStayConnected />
		</MainLayout>
	);
};

export default About;
