import React, { FC, useRef, useState } from 'react';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import classNames from 'classnames';

type PopupProps = {
	trigger: React.ReactNode;
	content: React.ReactNode;
	position?: 'r' | 'l';
};

const Popup: FC<PopupProps> = ({ trigger, content, position }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const popupRef = useRef<HTMLDivElement | null>(null);

	useOnClickOutside(popupRef, () => setIsOpen(false));

	return (
		<div className='relative'>
			<div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
			{isOpen && (
				<div
					ref={popupRef}
					className={classNames('absolute left-0 mt-1 z-10', {
						'left-auto right-0': position === 'r',
					})}>
					{content}
				</div>
			)}
		</div>
	);
};

export default Popup;
