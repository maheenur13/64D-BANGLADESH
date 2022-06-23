/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetaData } from '@components/organisms/Includes';
import { MainLayout } from '@components/templates';
import { productApi } from '@libs/api/product';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
const Home: NextPage<any> = () => {

	const [data, setAllData] = useState<any>([]);
	useEffect(() => {
		(async () => {
			const data = await productApi.getAllProducts();
			if (data) {
				setAllData(data);
			}
		})();
	}, []);


	return (
		<div>
			<MetaData
				overwriteTitle
				type="public-service"
				title="64D-Bangladesh | Bangladesh In Your Hand"
				image="/logo.png"
				description="Meta Description: 64D-Bangladesh is a public service site where people can know all about 64 district in Bangladesh"
			/>

			<MainLayout>


			</MainLayout>

			<footer></footer>
		</div>
	);
};

export default Home;

// Home.getInitialProps = async () => {
// 	const data = await productApi.getAllProducts();
// 	if (data) {
// 		console.log(data);
// 		return { data };
// 	}
// };
