const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components/GifItem");

describe('Pruebas de <GifItem>', () => {
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // console.log(screen.getByRole('img').src).toBe(url);
        // console.log(screen.getByRole('alt').alt).toBe(alt);
        const { src, alt } = screen.getByRole('img');
        // console.log(screen.getByRole('img'));
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('debe de mostar el título en el componente', ()=>{
        render(<GifItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    });
});
