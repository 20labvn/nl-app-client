import type {FC} from 'react';

const OverviewPage: FC = () => {
    return (
        <>
            <section className="jumbotron text-center my-4">
                <div className="container">
                    <h1 className="jumbotron-heading">WellCome</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents,
                        the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it
                        entirely.</p>
                    <p>
                        <a href="/login" className="btn btn-primary ">Login </a>
                        <a href="/register" className="btn btn-secondary ms-1">Register</a>
                    </p>
                </div>
            </section>
            <footer className="footer footer-transparent d-print-none">
                <div className="container-xl">
                    <div className="row text-center align-items-center flex-row-reverse">
                        <div className="col-lg-auto ms-lg-auto">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item"><a href="https://tabler.io/docs" target="_blank"
                                                                    className="link-secondary"
                                                                    rel="noopener">Version 1.0</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                            <ul className="list-inline list-inline-dots mb-0">
                                <li className="list-inline-item">
                                    © 2024
                                    <a href="." className="link-secondary"> 20Lab.vn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default OverviewPage;
