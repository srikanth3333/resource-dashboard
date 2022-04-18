import React from 'react'
import Lottie from 'react-lottie';
import loadingJson from './loading.json'

function Loader() {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loadingJson,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

  return (
    <div className="container">
        <div className="row justify-content-center main-center">
            <div className="col-lg-6">
                <Lottie 
                    options={defaultOptions}
                    height={'100%'}
                    width={'100%'}/>
            </div>
        </div>
    </div>
  )
}

export default Loader