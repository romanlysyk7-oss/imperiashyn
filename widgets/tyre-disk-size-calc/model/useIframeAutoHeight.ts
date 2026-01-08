'use client';

import { useCallback, useEffect, useState } from 'react';

export function useIframeAutoHeight(iframeId: string, extraOffset = 60) {
	const [ height, setHeight ] = useState('0px');

	const updateHeight = useCallback(() => {
		const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

		if(!iframe?.contentWindow) return;

		const content = iframe.contentWindow.document.querySelector('#content');

		if(content) {
			setHeight(`${ content.clientHeight + extraOffset }px`);
		}
	}, [ iframeId, extraOffset ]);

	useEffect(() => {
		const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

		if(!iframe) return;

		iframe.addEventListener('load', updateHeight);

		return () => {
			iframe.removeEventListener('load', updateHeight);
		};
	}, [ iframeId, updateHeight ]);

	return height;
}
