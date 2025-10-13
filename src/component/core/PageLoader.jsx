import React, { Suspense } from 'react';
import Loading from "@/component/Loading";

export default function PageLoader(Component){
    return function WrappedComponent(props){
       return(
         <Suspense fallback={<><Loading/></>}>
            <Component {...props} />
        </Suspense>
       )
    }
}