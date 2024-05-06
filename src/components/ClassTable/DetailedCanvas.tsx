import { FC } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TCollapsibleData } from '@/components/ClassTable/Table';

type TDetailedCanvas = {
	onClose: () => void;
	rowInfo: TCollapsibleData;
};

const DetailedCanvas: FC<TDetailedCanvas> = ({ onClose, rowInfo }) => {
	const { t } = useTranslation();
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				exit={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className='fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end items-start'>
				<div className='bg-black/30 absolute inset-0' onClick={onClose}></div>
			</motion.div>
			<motion.div
				initial={{ left: '100vw' }}
				exit={{ left: '100vw' }}
				animate={{ left: 'auto' }}
				transition={{ duration: 0.2 }}
				className='fixed top-0 w-[300px] border-l border-orange-100 right-0 bottom-0 z-50 bg-white overflow-x-hidden flex flex-col'>
				<div className='p-4 font-semibold bg-white'>
					<div className=''>{t('rowTitle')}</div>
				</div>
				<div className='grow font-normal text-sm text-justify overflow-y-auto px-4 flex flex-col gap-2'>
					<div>
						<span className='font-semibold'>{t('Title')}</span>: {rowInfo.title}
					</div>
					<div>
						<span className='font-semibold'>{t('Code')}</span>: {rowInfo.code}
					</div>
					<div>
						<span className='font-semibold'>{t('level')}</span>: {rowInfo.level}
					</div>
					<div>
						<span className='font-semibold'>{t('Description')}</span>: Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Optio, quas quibusdam explicabo culpa necessitatibus
						aspernatur voluptatibus inventore totam accusamus nam saepe qui officia assumenda
						quisquam reiciendis tempora perspiciatis, maxime quod. Voluptatem eligendi, dignissimos
						nulla iste alias illo? Maxime illo sed saepe ducimus, officia numquam, temporibus
						tempore in atque voluptates, dolore at vitae consectetur nam architecto amet veritatis
						adipisci omnis dolores. Culpa porro, vel officiis quibusdam reprehenderit, quae
						provident nihil, doloribus dignissimos laboriosam incidunt omnis amet illo sequi cum
						nobis velit facere dolores eaque. Saepe libero eaque animi, quam repellendu autem.
						Consequuntur repellat hic ipsum aliquam, atque odit culpa perferendis ratione voluptas
						amet blanditiis molestiae et ullam sit dolor error dignissimos provident iste,
						laboriosam asperiores voluptatum animi aliquid quisquam! Praesentium, at. Deserunt illo
						atque perferendis labore quia quae quibusdam harum sed odio quas nobis velit nihil,
						veritatis obcaecati omnis. Reprehenderit impedit similique vero natus fugit,
						exercitationem esse optio dolor veniam consequuntur.
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default DetailedCanvas;
