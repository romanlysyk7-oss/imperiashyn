'use client';

import { FC, MouseEvent, TouchEvent, useRef, useState } from 'react';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';

import { ImageSliderProps } from '../model/types';
import './image-slider.scss';

const swipeThreshold = 10;

export const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
	const [ index, setIndex ] = useState(0);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const startX = useRef<number | null>(null);
	const startY = useRef<number | null>(null);

	const openModalIfDesktop = () => {
		if(window.innerWidth >= 768) onOpen();
	};

	const onMouseDown = (e: MouseEvent) => {
		startX.current = e.clientX;
		startY.current = e.clientY;
	};

	const onMouseUp = (e: MouseEvent) => {
		if(!startX.current || !startY.current) return;

		const dx = Math.abs(e.clientX - startX.current);
		const dy = Math.abs(e.clientY - startY.current);

		if(dx < swipeThreshold && dy < swipeThreshold) {
			openModalIfDesktop();
		}

		startX.current = startY.current = null;
	};

	const onTouchStart = (e: TouchEvent) => {
		const t = e.touches[0];
		startX.current = t.clientX;
		startY.current = t.clientY;
	};

	const onTouchEnd = (e: TouchEvent) => {
		const t = e.changedTouches[0];
		if(!startX.current || !startY.current) return;

		const dx = Math.abs(t.clientX - startX.current);
		const dy = Math.abs(t.clientY - startY.current);

		if(dx < swipeThreshold && dy < swipeThreshold) {
			openModalIfDesktop();
		}

		startX.current = startY.current = null;
	};

	const SampleNextArrow = (props: CustomArrowProps) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={ className }
				style={ { ...style } }
				onClick={ onClick }
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path
						d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
						fill="currentColor"/>
				</svg>
			</div>
		);
	}

	const SamplePrevArrow = (props: CustomArrowProps) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={ className }
				style={ { ...style } }
				onClick={ onClick }
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
					<path
						d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
						fill="currentColor"/>
				</svg>
			</div>
		);
	}

	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		beforeChange: (_: number, next: number) => setIndex(next),
		customPaging: (i: number) => (
			<Image
				src={ images[i].thumbnail }
				alt=''
				width={ 60 }
				height={ 60 }
				loading='lazy'
			/>
		),
		dotsClass: 'slick-dots slick-thumb',
	};

	const settingsModal = {
		...settings,
		arrows: true,
		nextArrow: <SampleNextArrow/>,
		prevArrow: <SamplePrevArrow/>,
		initialSlide: index
	};

	return (
		<>
			<Slider { ...settings }>
				{ images.map((img, i) => (
					<div
						key={ i }
						onMouseDown={ onMouseDown }
						onMouseUp={ onMouseUp }
						onTouchStart={ onTouchStart }
						onTouchEnd={ onTouchEnd }
					>
						<Image src={ img.thumbnail } alt='' width={ 560 } height={ 560 }/>
					</div>
				)) }
			</Slider>

			<Modal isOpen={ isOpen } onClose={ onClose } size='3xl'>
				<ModalContent>
					<ModalBody>
						<Slider { ...settingsModal }>
							{ images.map((img, i) => (
								<Image key={ i } src={ img.original } alt='' width={ 560 } height={ 560 }/>
							)) }
						</Slider>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
