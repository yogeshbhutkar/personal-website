"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedCursor() {
	const cursorRef = useRef<HTMLDivElement>( null );

	useEffect( () => {
		const handleMouseMove = ( event: MouseEvent ) => {
			if ( !cursorRef.current ) return;

			const { height, width } = cursorRef.current.getBoundingClientRect();

			// Consider safety margins.
			const maxX = window.innerWidth - ( width + 16 );
			const maxY = window.innerHeight - ( height + 16 );

			// Divide by 2 to center the cursor.
			const x = gsap.utils.clamp( 0, maxX, event.clientX - width / 2 );
			const y = gsap.utils.clamp( 0, maxY, event.clientY - height / 2 );

			gsap.to(cursorRef.current, {
				x,
				y,
				duration: 1,
				ease: 'power2.out',
			});
		}

		window.addEventListener( 'mousemove', handleMouseMove )
		return () => {
			window.removeEventListener( 'mousemove', handleMouseMove );
		}
	}, []);

	return (
		<div
			ref={cursorRef}
			className='pointer-events-none h-[40px] w-[40px] rounded-full bg-[#efefef] opacity-30 -z-10 fixed top-0 left-0'
		/>
	)
}
