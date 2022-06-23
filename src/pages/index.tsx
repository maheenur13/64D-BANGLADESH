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
				<h1>Main Layout</h1>
				{
					data?.length > 0 ? <h1>Yes I am data</h1> : <h1>Loading</h1>
				}

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
