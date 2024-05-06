import { FC } from 'react';
import { Table as TTableProps } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';

export interface ITableProps {
	table: TTableProps<any>;
}

const Pagination: FC<ITableProps> = ({ table }) => {
	const { t } = useTranslation();
	return (
		<div className='flex items-center justify-between mb-3'>
			<div className='flex items-center gap-2 text-[10px] sm:text-sm sm:p-2'>
				<span className='hidden sm:inline-block'>{t('Results per page:')}</span>
				<select
					value={table.getState().pagination.pageSize}
					onChange={(e) => {
						table.setPageSize(Number(e.target.value));
					}}
					className='!w-fit rounded-xl font-bold text-orange-500 !bg-white outline-none cursor-pointer'
					name='pageSize'>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize} className='text-[10px] sm:text-sm'>
							{pageSize}
						</option>
					))}
				</select>
			</div>
			<div className='flex items-center gap-2 sm:p-2'>
				<button
					onClick={() => table.setPageIndex(0)}
					disabled={!table.getCanPreviousPage()}
					className=' bg-white rounded-lg sm:p-1 font-medium text-[10px] sm:text-sm border-zinc-300'>
					<img src='/icons/chevron_double_left.svg' alt='First' className='w-3 h-3' />
				</button>
				<button
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					className=' bg-white rounded-lg sm:p-1 font-medium text-[10px] sm:text-sm border-zinc-300'>
					<img src='/icons/chevron_left.svg' alt='First' className='w-3 h-3' />
				</button>
				<span className='flex items-center gap-1'>
					<div className='text-[10px] sm:text-sm'>{t('Page')}</div>
					<span className='text-[10px] sm:text-sm font-bold'>
						<input
							value={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className='inline-flex !w-10 bg-white text-center text-[10px] sm:text-sm rounded-xl text-orange-500 outline-none'
							name='page'
						/>{' '}
						<span className='font-normal'>{t('of')}</span>
						<span className='text-orange-500 ml-2'>{table.getPageCount()}</span>
					</span>
				</span>
				<button
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
					className=' bg-white rounded-lg p-1 font-bold text-[10px] sm:text-sm border-zinc-300'>
					<img src='/icons/chevron_right.svg' alt='First' className='w-3 h-3' />
				</button>
				<button
					onClick={() => table.setPageIndex(table.getPageCount() - 1)}
					disabled={!table.getCanNextPage()}
					className=' bg-white rounded-lg p-1 font-medium text-[10px] sm:text-sm border-zinc-300'>
					<img src='/icons/chevron_double_right.svg' alt='First' className='w-3 h-3' />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
