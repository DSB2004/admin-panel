import React, { forwardRef } from 'react';
import Button from '../form/button';

const SubmitRememberMe = forwardRef(({ onClick }, ref) => {
    return (
        <div className="row">
            <div className="col-8">
                <div className="icheck-primary">
                    <input type="checkbox" id="remember" ref={ref} />
                    <label htmlFor="remember">Remember Me</label>
                </div>
            </div>
            <div className="col-4">
                <Button text="Submit" onClick={() => { if (onClick) { onClick() } }} />
            </div>
        </div>
    );
});

export default SubmitRememberMe;
