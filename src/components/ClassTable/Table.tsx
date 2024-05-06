import DetailedCanvas from '@/components/ClassTable/DetailedCanvas';
import { useAllTables } from '@/contexts/AllTablesContext';
import useMediaQuery from '@/hooks/ useMediaQuery';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';
import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RotatingTriangles } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

type TTable = {
	activeTab: string;
};

export type TCollapsibleData = {
	[key: string]: string;
};

export type TFilterOption = {
	[key: string]: string;
};

const Table: FC<TTable> = ({ activeTab }) => {
	const { t } = useTranslation();
	const { tables, isLoading } = useAllTables();
	const maxLevel = tables ? tables[activeTab]?.payload.maxLevel : 1;
	const [data, setData] = useState<TCollapsibleData[] | null>(null);
	const [filters, setFilters] = useState<Record<string, boolean> | null>(null);
	const [filterByTitleQuote, setFilterByTitleQuote] = useState<string>('');
	const [showDetailedCanvas, setShowDetailedCanvas] = useState<boolean>(false);
	const [selectedRow, setSelectedRow] = useState<TCollapsibleData | null>(null);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const location = useLocation();
	const { search } = location;
	const queryParams = new URLSearchParams(search);
	const [rowValue, setRowValue] = useState<string>(queryParams.get('row') || '');
	const [rowToHighlight, setRowToHighlight] = useState<TCollapsibleData | null>(
		data?.find((item) => item.code === rowValue) || null,
	);
	const [filterLevel, setFilterLevel] = useState<number>(maxLevel);
	const minWidth640px = useMediaQuery('(min-width: 640px)');
	const [levelCalledBy, setLevelCalledBy] = useState<'button' | 'toggle'>('button');
	const rowRef = useRef<HTMLTableRowElement | null>(null);
	useBodyScrollLock(showDetailedCanvas);

	const handleTitleChange = (e?: ChangeEvent<HTMLInputElement>) => {
		rowValue && setRowValue('');
		setFilterLevel(maxLevel);
		setFilterByTitleQuote(e?.target.value || '');
	};

	useEffect(() => {
		const rowValueObj = data?.find((item) => item.code === rowValue) || null;
		const splitedCode = rowValue.split('_');
		if (!rowToHighlight && rowValue) {
			return setRowToHighlight(rowValueObj);
		}
		if (!rowValue) {
			return setRowToHighlight(null);
		}
		if (rowToHighlight) {
			const res =
				data?.find((item) =>
					item.code.startsWith(splitedCode.slice(0, filterLevel + 1).join('_')),
				) || null;
			setRowToHighlight(res);
		}
	}, [rowToHighlight, rowValue, data]);

	useEffect(() => {
		if (rowToHighlight && rowValue && data) {
			const rowToBeHighlighted = data.find((item) => item.code === rowToHighlight.code);
			if (rowToBeHighlighted) {
				if (rowRef.current) {
					rowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}
		}
	}, [rowToHighlight, rowValue, data]);

	useEffect(() => {
		setErrorMessage('');
		try {
			if (tables && filters && levelCalledBy === 'button') {
				let filteredRows = [];

				if (filterByTitleQuote) {
					filteredRows = tables[activeTab.toLowerCase()]?.rows.filter((item) =>
						item.title.toLowerCase().includes(filterByTitleQuote.toLowerCase()),
					);
					filteredRows = filteredRows.map((item) => {
						const splitedItemCode = item.code.split('_');
						const result = [];
						if (item.level === 1) {
							return item;
						}
						for (let i = 1; i <= item.level; i++) {
							tables[activeTab.toLowerCase()]?.rows.find((row) => {
								row.code.startsWith(splitedItemCode.slice(0, i).join('_') + '_00') &&
									result.push(row);
							});
						}
						result.push({ ...item });

						return result;
					});
					filteredRows = filteredRows.flat().map((row) => {
						if (row.level > filterLevel) {
							return { ...row, show: false };
						}
						return row;
					});
					console.log(filteredRows);

					const codeMap = {} as Record<string, boolean>;
					const uniqueObjects = [];

					for (const obj of filteredRows) {
						if (!codeMap[obj.code]) {
							codeMap[obj.code] = true;
							uniqueObjects.push(obj);
						}
					}
					filteredRows = uniqueObjects;
				} else {
					filteredRows = tables[activeTab.toLowerCase()]?.rows.map((row) => {
						for (let i = 1; i <= tables[activeTab]?.payload.maxLevel; i++) {
							if (row.level <= filterLevel) {
								return row;
							}
						}
						return { ...row, show: false };
					});
				}

				setData(filteredRows as unknown as TCollapsibleData[]);
			}
		} catch (e) {
			console.log(e);
		}
	}, [activeTab, filters, filterByTitleQuote, filterLevel]);

	const handleClearFilters = () => {
		setFilterByTitleQuote('');
		setFilterLevel(maxLevel);
		setRowValue('');
	};

	const toggleCollapseRows = (item: TCollapsibleData) => {
		let currentMax = 1;
		const codePrefix = item.code.split('_00')[0];
		const newData = data?.map((row) => {
			if (row.code.startsWith(codePrefix) && row.level > item.level) {
				const res: any = {
					...row,
					show: row.level === item.level + 1 ? !row.show : false,
				};

				if (currentMax < +res.level && res.show) {
					console.log(res.level);
					currentMax = +row.level;
				}
				return res as TCollapsibleData;
			}

			if (currentMax < +row.level && row.show) {
				console.log(row.level);
				currentMax = +row.level;
			}
			return row;
		});
		setLevelCalledBy('toggle');
		setFilterLevel(currentMax);
		setData(newData as TCollapsibleData[]);
	};
	const levelColor = (level: number) => {
		switch (level) {
			case 1:
				return 'bg-zinc-300';
			case 2:
				return 'bg-zinc-200';
			case 3:
				return 'bg-zinc-100';
			default:
				return 'bg-white';
		}
	};

	const handleOpenDetails = (row: TCollapsibleData) => {
		setSelectedRow(row);
		setShowDetailedCanvas(true);
	};
	const handleCloseDetails = () => {
		setShowDetailedCanvas(false);
		setSelectedRow(null);
	};

	const renderRows = (items: typeof data) => {
		return items?.map((item, index) => (
			<React.Fragment key={item.code + index}>
				{item.show && (
					<tr
						ref={(ref) => {
							if (rowToHighlight?.code === item.code) {
								rowRef.current = ref;
							}
						}}
						className='group'>
						<td
							style={{
								paddingLeft: `${+item.level * (minWidth640px ? 20 : 2)}px`,
							}}
							className={`group-hover:bg-orange-100 trans rounded-l-md py-3 items-center text-[0.5rem] sm:text-sm ${levelColor(+item.level || 0)} ${
								rowToHighlight?.code === item.code ? '!bg-orange-300' : ''
							}`}
							onClick={() => toggleCollapseRows(item)}>
							{!!data?.filter(
								(itm) => itm.code.startsWith(item.code.split('_00')[0]) && itm.code !== item.code,
							).length && (
								<button className='sm:h-4 sm:w-4 h-2 w-2'>
									<img
										className=''
										src={`/icons/chevron_${
											data?.filter(
												(itm) =>
													itm.code.startsWith(item.code.split('_00')[0]) &&
													itm.code !== item.code &&
													itm.show,
											).length
												? 'up'
												: 'down'
										}.svg`}
										alt='Chevron'
									/>
								</button>
							)}

							{item.code}
						</td>
						<td
							className={`group-hover:bg-orange-100 rounded-r-md cursor-pointer py-3 trans text-[0.5rem] sm:text-sm ${levelColor(+item.level || 0)} ${
								rowToHighlight?.code === item.code && item.show ? '!bg-orange-300' : ''
							}`}
							onClick={() => handleOpenDetails(item)}>
							{item.title}{' '}
							<img
								src='/icons/info.svg'
								alt='Info'
								className='inline-block sm:h-4 sm:w-4 h-2 w-2'
							/>
						</td>
					</tr>
				)}
			</React.Fragment>
		));
	};

	useEffect(() => {
		console.log(activeTab);
		if (tables) {
			try {
				const activeTabFilters = tables[activeTab]?.payload.filters;
				setFilters(
					Object.fromEntries(Object.entries(activeTabFilters).map(([key]) => [key, true])),
				);
				setFilterByTitleQuote('');
				setData(null);
				setFilterLevel(maxLevel);
				setRowToHighlight(null);
			} catch (e) {
				console.log(e);
			}
		}
	}, [activeTab]);

	return (
		<>
			<AnimatePresence>
				{showDetailedCanvas && selectedRow && (
					<DetailedCanvas rowInfo={selectedRow} onClose={handleCloseDetails} />
				)}
			</AnimatePresence>
			{!isLoading && !!data ? (
				<>
					{!!filters && (
						<div className='sticky top-[56px] py-6 bg-white w-full flex items-center gap-2 flex-wrap justify-between'>
							<div className='flex gap-2 flex-wrap justify-between w-full sm:w-fit'>
								{Object.entries(filters).map(([key], index: number) => (
									<button
										key={key}
										className={classNames(
											'bg-zinc-100 text-[10px] sm:text-sm grow sm:grow-0 rounded p-1 sm:p-2 border border-zinc-300',
											{
												'!bg-orange-400 text-white': filterLevel === index + 1,
											},
										)}
										onClick={() => {
											setLevelCalledBy('button');
											setFilterLevel(index + 1);
										}}>
										{`${t('level') + ' ' + key.slice(5)}`}
									</button>
								))}
							</div>
							<div className='grow flex gap-2'>
								<input
									type='text'
									className='w-full bg-zinc-100 p-1 sm:p-2 text-[10px] sm:text-sm rounded-md !outline-none border border-zinc-300'
									value={filterByTitleQuote}
									placeholder={t('searchByTitle')}
									onChange={handleTitleChange}
								/>
								<button
									className={classNames(
										'bg-zinc-100 p-1 sm:p-2 text-[10px] sm:text-sm rounded-md !outline-none border border-zinc-300',
									)}
									onClick={handleClearFilters}>
									{t('Clear')}
								</button>
							</div>
						</div>
					)}
					{data.length ? (
						<div className='w-full mb-4 rounded-2xl'>
							<table className='w-full h-full table-auto'>
								<thead className='sticky top-[141px] bg-white'>
									<tr className='bg-white'>
										<th className='resize-x w-[50%] rounded-l-lg bg-orange-100 py-2 text-[0.5rem] sm:text-sm font-bold bg-tr'>
											{t('Code')}
										</th>
										<th className='w-[50%] rounded-r-lg bg-orange-100 py-2 text-[0.5rem] sm:text-sm font-bold'>
											{t('Title')}
										</th>
									</tr>
								</thead>
								<tbody>{renderRows(data)}</tbody>
							</table>
						</div>
					) : (
						<span className='w-full text-center text-orange-600'>{t('noRowsAreFound')}</span>
					)}
				</>
			) : (
				<>
					{!errorMessage ? (
						<div className='absolute inset-0 z-[1000] bg-white flex items-center justify-center'>
							<RotatingTriangles
								visible={true}
								height='80'
								width='80'
								colors={['#FFAC1C', '	#CC5500', '#FF7F50']}
								ariaLabel='rotating-triangles-loading'
							/>
						</div>
					) : (
						<div>{errorMessage}</div>
					)}
				</>
			)}
		</>
	);
};

export default Table;
