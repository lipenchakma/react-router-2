import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className="container mx-auto text-center mt-20">
            <h2 className=" font-semibold text-2xl">Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status ===404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from </p>
                    <Link to="/"><button className="bg-lime-500 rounded-lg px-20">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;