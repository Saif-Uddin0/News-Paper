import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span class="loading loading-spinner loading-md"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;