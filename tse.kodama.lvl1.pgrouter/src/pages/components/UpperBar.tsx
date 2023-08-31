// uma simples div como react component e um estilo para fazer a barra rosa superior da página
import UpperBarButtons from "./UpperBarButtons";

export const UpperBar = () => {
	return (
		<div className=' bg-RosaCorpo border-b-2'>
			<UpperBarButtons />
		</div>
	);
};
