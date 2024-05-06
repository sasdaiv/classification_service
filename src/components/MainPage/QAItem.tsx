import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';

interface IQAItem {
	question: string;
	answer: string;
}

const QAItem: FC<IQAItem> = ({ question, answer }) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<div className='border-b'>
			<div className='w-full'>
				<button
					onClick={() => setOpen((prev: boolean) => !prev)}
					className='w-full text-left py-3 px-4 flex items-center text-[10px] sm:text-sm justify-between font-medium'>
					<div>{question}</div>
					<div>
						<img
							src='/icons/chevron_down.svg'
							alt='Down'
							className={classNames('h3 w-3 trans transform hover:rotate-180', {
								'rotate-180': open,
							})}
						/>
					</div>
				</button>
			</div>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ height: 0 }}
						exit={{ height: 0 }}
						animate={{ height: 'auto' }}
						className='overflow-hidden text-xs'>
						<p className='px-4 py-2 text-[8px] sm:text-sm text-justify'>{answer}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default QAItem;
