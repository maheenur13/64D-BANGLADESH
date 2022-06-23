import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

export const MetaData: FC<PropsType> = ({ title, name, description, overwriteTitle, type, image }) => {
	const router = useRouter();
	const siteTitle = title + ' - 64D-BANGLADESH';
	const pageURL = process.env.publicURL + router.pathname;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, minimum-scale=1, user-scalable=no" />

			{title && <title>{overwriteTitle ? title : siteTitle}</title>}
			{description && <meta name="description" content={description} />}

			{/* Open Graph Data */}
			{title && <meta property="og:title" content={overwriteTitle ? title : siteTitle} />}
			{name && <meta property="og:site_name" content={name} />}
			<meta property="og:url" content={pageURL} />
			{description && <meta property="og:description" content={description} />}
			<meta property="og:type" content={type} />
			{image && <meta property="og:image" content={image} />}
		</Head>
	);
};

MetaData.defaultProps = {
	type: 'website',
	name: '64D-Bangladesh',
	overwriteTitle: false,
};

interface PropsType {
	type?: string;
	name?: string;
	image?: string;
	title?: string;
	description?: string;
	overwriteTitle?: boolean;
}
