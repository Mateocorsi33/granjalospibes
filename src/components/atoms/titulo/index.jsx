export default function Titulo ({ texto, classAdicional }){

    const estilosPredeterminados = 'text-3xl font-bebasneue text-black text-center';
    const claseCSSFinal = `${estilosPredeterminados} ${classAdicional || ''}`;

    return (
        <h1 className={claseCSSFinal}>
            {texto}
        </h1>
      );

}