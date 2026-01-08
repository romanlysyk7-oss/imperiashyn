import DOMPurify from 'isomorphic-dompurify';

export const HtmlContent = ({ htmlString, className }: { htmlString: string, className?: string }) => {
	const sanitizedHtml = DOMPurify.sanitize(htmlString, {
		ADD_TAGS: [ 'iframe' ],
		ADD_ATTR: [ 'allow', 'allowfullscreen', 'frameborder', 'scrolling', 'loading', 'referrerpolicy' ]
	});
	return (
		<div
			className={ className }
			dangerouslySetInnerHTML={ { __html: sanitizedHtml } }
		/>
	);
};