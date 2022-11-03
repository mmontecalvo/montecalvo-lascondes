import { Link } from 'react-router-dom';

function Page404() {
    return (
        <section className="mainContent page404">
            <h1 className="page404__title">Error 404</h1>
            <p className="page404__text">La página solicitada no existe.</p>
            <Link to="/" className="page404__btn">Volver a la página principal</Link>
        </section>
    )
}

export default Page404
