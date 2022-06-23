import { FC } from 'react';

export const MainLayout: FC<PropsType> = ({ children }) => {
	return <div>{children}</div>;
};

interface PropsType {
	children: React.ReactNode;
}
