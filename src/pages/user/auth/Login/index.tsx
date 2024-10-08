import { type FC } from 'react';

export const LoginPage: FC = () => {
    return(
        <>
            <div className="page page-center">
                <div className="container container-tight py-4">
                <div className="card card-md">
                <div className="card-body">
                    <h2 className="h2 text-center mb-4">Login to your account</h2>
                    <form  action="./" method="get" autoComplete="off">
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
                                <input type="password" className="form-control" placeholder="Your password"
                                       autoComplete="off"/>
                                <span className="input-group-text">
                                    <a href="#" className="link-secondary" data-bs-toggle="tooltip"
                                       aria-label="Show password"
                                       data-bs-original-title="Show password">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                            d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path
                            d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path></svg>
                    </a>
                  </span>
                            </div>
                        </div>
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary w-100">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="text-center text-secondary mt-3">
                    <a href="/register" className="ant-form-item-label">Don't have an account?</a>
                </div>
            </div>
                </div>
            </div>
        </>
    )
};
