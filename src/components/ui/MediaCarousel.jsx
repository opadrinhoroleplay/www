import React, { useEffect, useRef } from 'react';

const getMediaType = (url) => {
	const extension = url.split('.').pop().toLowerCase();
	if (['mp4', 'webm', 'ogg'].includes(extension)) return 'video';
	if (['gif', 'webp', 'jpg', 'jpeg', 'png', 'avif'].includes(extension)) return 'image';
	return 'image'; // fallback to image for unknown types
};

const MediaItem = ({ src, isActive }) => {
	const mediaType = getMediaType(src);
	const videoRef = useRef(null);

	useEffect(() => {
		if (mediaType === 'video' && videoRef.current) {
			if (isActive) {
				videoRef.current.play().catch(() => {
					// Autoplay might be blocked, we'll let the user control it manually
				});
			} else {
				videoRef.current.pause();
				videoRef.current.currentTime = 0;
			}
		}
	}, [isActive, mediaType]);

	if (mediaType === 'video') {
		return (
			<video
				ref={videoRef}
				src={src}
				className="w-full h-full object-cover rounded-xl"
				loop
				muted
				playsInline
				controls={false}
			/>
		);
	}

	return (
		<img
			src={src}
			alt=""
			className="w-full h-full object-cover rounded-xl"
		/>
	);
};

const MediaCarousel = ({ media }) => {
	const carouselRef = useRef(null);
	const slidesRef = useRef([]);

	useEffect(() => {
		if (!carouselRef.current || media.length <= 1) return;

		const slides = slidesRef.current;
		let currentIndex = 0;

		const animate = () => {
			// Reset opacity for all slides
			slides.forEach(slide => {
				slide.style.opacity = '0';
				slide.style.transform = 'scale(0.95)';
			});

			// Show current slide
			slides[currentIndex].style.opacity = '1';
			slides[currentIndex].style.transform = 'scale(1)';

			// Prepare animation for next slide
			const nextIndex = (currentIndex + 1) % slides.length;
			const currentSlide = slides[currentIndex];
			const nextSlide = slides[nextIndex];

			// Create fade out animation for current slide
			currentSlide.animate([
				{ opacity: 1, transform: 'scale(1)' },
				{ opacity: 0, transform: 'scale(0.95)' }
			], {
				duration: 1000,
				easing: 'ease-in-out',
				fill: 'forwards'
			});

			// Create fade in animation for next slide
			nextSlide.animate([
				{ opacity: 0, transform: 'scale(0.95)' },
				{ opacity: 1, transform: 'scale(1)' }
			], {
				duration: 1000,
				easing: 'ease-in-out',
				fill: 'forwards'
			});

			currentIndex = nextIndex;
		};

		const interval = setInterval(animate, 5000);
		return () => clearInterval(interval);
	}, [media]);

	if (!media || media.length === 0) {
		return null;
	}

	return (
		<div ref={carouselRef} className="relative w-full h-full overflow-hidden rounded-xl">
			{media.map((src, index) => (
				<div
					key={index}
					ref={el => slidesRef.current[index] = el}
					className="absolute inset-0 transition-all duration-1000 ease-in-out"
					style={{ opacity: index === 0 ? 1 : 0 }}
				>
					<MediaItem src={src} isActive={index === 0} />
				</div>
			))}
		</div>
	);
};

export default MediaCarousel; 