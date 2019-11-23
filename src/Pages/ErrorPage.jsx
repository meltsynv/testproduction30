import React from 'react';
import Layout from '../components/Layout';

function ErrorPage(props) {
    return (
        <Layout>
            <div className='errorPage' style={{ padding: '100px 0' }}>
                <h1>404</h1>
                <h3>Diese Seite konnte nicht gefunden werden!</h3>
            </div>
        </Layout>
    );
}

export default ErrorPage;