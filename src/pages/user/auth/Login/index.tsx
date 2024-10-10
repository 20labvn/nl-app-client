import {type FC} from 'react';
import {ViewIcon} from 'components/icon';

export const LoginPage: FC = () => {
    return (
        <>
            <div className="page page-center">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-center mb-4">Login to your account</h3>
                                    <form action="./" method="get" autoComplete="off">
                                        <div className="mb-3">
                                            <label className="form-label">Email address</label>
                                            <input type="email" className="form-control" placeholder="your@email.com"
                                                   autoComplete="off"/>
                                        </div>
                                        <div className="mb-2">
                                            <label className="form-label">
                                                Password
                                            </label>
                                            <div className="input-group input-group-flat">
                                                <input type="password" className="form-control"
                                                       placeholder="Your password"
                                                       autoComplete="off"/>
                                                <span className="input-group-text">
                                                    <a href="#" className="link-secondary" data-bs-toggle="tooltip"
                                                       aria-label="Show password"
                                                       data-bs-original-title="Show password">
                                                        <ViewIcon/>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="form-footer text-center">
                                            <button type="submit" className="btn btn-primary ">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-center text-secondary mt-3">
                                Don't have account yet? <a href="/register">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
