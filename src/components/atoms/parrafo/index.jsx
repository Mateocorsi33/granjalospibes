export default function Parrafo ({ texto, classAdicional }){

    const estilosPredeterminados = 'text-base font-poppins text-black w-full h-auto text-center';
    const claseCSSFinal = `${estilosPredeterminados} ${classAdicional || ''}`;

    return (
        <p className={claseCSSFinal}>
            {texto}
        </p>
      );

}