import React from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';

function PageContainer({ children }) {
    return (
        <div className="m-0 w-full">
            <Header />
            <div className="w-full min-h-[calc(100vh-195px)] overflow-auto pt-2 sm:pt-10 ">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageContainer;
