import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-3/12 md:w-3/12 mx-auto'>
           <div className="dropdown mb-5">
            <label tabIndex={0} className="btn m-1">what is cors?</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. </p>
                
            </ul>
            </div>
           <div className="dropdown mb-5">
            <label tabIndex={0} className="btn m-1">Why are you using firebase? What other options do you have to implement authentication?</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <p>Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here)</p>
                <li>1: Google Analytics For Firebase</li>
                <li>2: Realtime Database & Firestore</li>
                <li>3:Authentication</li>
                <li>4: Crashlytics</li>
                <li>5: Free Use of Dynamic Links</li>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                
            </ul>
            </div>
           <div className="dropdown mb-5">
            <label tabIndex={0} className="btn m-1">How does the private route work?</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property..The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                
                
            </ul>
            </div>
           <div className="dropdown mb-5">
            <label tabIndex={0} className="btn m-1">What is Node? How does Node work?</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                <p>Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function</p>
                
                
            </ul>
            </div>
        </div>
    );
};

export default Blog;