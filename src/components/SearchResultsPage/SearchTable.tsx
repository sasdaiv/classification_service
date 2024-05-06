import FilterCheckboxes from '@/components/common/FilterCheckboxes';
import Pagination from '@/components/SearchResultsPage/Pagination';
import { options } from '@/constants/contants';
import { useAllTables } from '@/contexts/AllTablesContext';
import {
	CellContext,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export type TRowObj = {
	title: string;
	table: string;
	code: string;
};

const SearchTable = () => {
	const { query } = useAllTables();
	const { tables, isLoading } = useAllTables();
	const [data, setData] = useState<TRowObj[]>([]);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = useState<string>('');
	const [filteredTabs, setFilteredTabs] = useState<string[]>(Object.keys(options));
	const navigate = useNavigate();
	const { t } = useTranslation();

	const columns = [
		{
			accessorKey: 'title',
			header: 'Title',
			cell: (info: CellContext<TRowObj, string>) => {
				return (
					<button
						className='text-orange-700 font-bold text-left'
						onClick={() => {
							const { code } = info.row.original;
							navigate('/sections?tab=' + code.slice(0, 2).toLowerCase() + '&row=' + code);
						}}>
						{info.getValue()}
					</button>
				);
			},
		},
		{
			accessorKey: 'table',
			header: 'Table',
			cell: (info: CellContext<TRowObj, string>) => (
				<div>{options[info.getValue().toLowerCase()]}</div>
			),
		},
		{
			accessorKey: 'code',
			header: 'Code',
			cell: (info: CellContext<TRowObj, string>) => <div>{info.getValue()}</div>,
		},
	];

	useEffect(() => {
		const resArr: TRowObj[] = [];
		tables
			? Object.values(tables).forEach((value) => {
					const valueSearchTableRows = value.rows.map((item) => ({
						title: item.title,
						code: item.code,
						table: value.payload.tab,
					}));
					resArr.push(...valueSearchTableRows);
				})
			: [];

		const filteredResArr = resArr.filter(
			(item) =>
				item.title.toLowerCase().includes(query.toLowerCase()) &&
				item.code &&
				filteredTabs.includes(item.table.toLowerCase()),
		);
		setData(filteredResArr);
	}, [isLoading, tables, query, filteredTabs]);
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		enableGlobalFilter: true,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: { pageSize: 20 },
		},
	});

	return (
		<div className='w-full overflow-y-auto lg:flex'>
			<div className=''>
				<FilterCheckboxes
					filteredOptions={filteredTabs}
					toggleShowHideFilters={(arr: string[]) => setFilteredTabs(arr)}
					setFilteredOptions={(option: string) =>
						setFilteredTabs((prev) =>
							prev.includes(option)
								? prev.filter((item: string) => item !== option)
								: [...prev, option],
						)
					}
					staticOptions={Object.keys(options)}
					useOptionsLabels={true}
				/>
			</div>
			<div className='w-full pb-4 sm:px-4'>
				<Pagination table={table} />
				{table.getRowModel().rows.length > 0 ? (
					<div className='w-full sm:p-4 mb-2'>
						<table className='w-full table-fixed'>
							<thead>
								{table.getHeaderGroups().map((headerGroup) => (
									<tr key={headerGroup.id} className='backdrop-sm'>
										{headerGroup.headers.map((header) => (
											<th key={header.id}>
												{header.isPlaceholder ? null : (
													<div
														aria-hidden='true'
														className={
															header.column.getCanSort()
																? 'text-[10px] sm:text-base cursor-pointer select-none flex items-center gap-2'
																: ''
														}
														onClick={header.column.getToggleSortingHandler()}>
														{t(
															flexRender(
																header.column.columnDef.header,
																header.getContext(),
															) as string,
														)}
														{{
															asc: (
																<img
																	className='w-3 h-3'
																	src='/icons/chevron_down.svg'
																	alt='Chevron Down'
																/>
															),
															desc: (
																<img
																	className='w-3 h-3'
																	src='/icons/chevron_up.svg'
																	alt='Chevron Up'
																/>
															),
														}[header.column.getIsSorted() as string] ?? (
															<img
																className='w-3 h-3'
																src='/icons/chevron_up_down.svg'
																alt='Chevron UpAndDown'
															/>
														)}
													</div>
												)}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody>
								{table.getRowModel().rows.map((row) => (
									<tr key={row.id}>
										{row.getVisibleCells().map((cell) => (
											<td
												style={{ width: cell.column.getSize() }}
												key={cell.id}
												className='border-b px-2 py-4 text-[0.5rem] sm:text-sm'>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<div className='w-full text-orange-400 text-[0.5rem] sm:text-sm font-semibold'>
						{t('No results...')}
					</div>
				)}
				{table.getState().pagination.pageSize >= 20 && table.getRowModel().rows.length >= 10 && (
					<Pagination table={table} />
				)}
			</div>
		</div>
	);
};

export default SearchTable;
