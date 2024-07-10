import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { routes } from "./routes";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        {routes.map((el) => 
            el.children.length > 0 ? (
                <Route path={el.path} element={el.element}>
                    {el.children.map((child) => (
                      <Route 
                      path={child.path} 
                      element={child.element}
                      index ={child.index}
                      key={child.path}
                      />
                    ))}
                </Route>
            ):(
                <Route element={el.element} path={el.path}/>
            )
        )}

        

        <Route 
        path="*"
        element={
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <h1 className="text-4xl font-bold mb-4 " > 404 - page not found </h1>
            <p className="text-lg text-gray-700 mb-8">Sorry the page you are looking for does not exist.</p>
            <button className="bh-black/80 hover:bg-black/90 text-white font0bold py-2 px-4 rounded" > <a href="/">Go Back Home</a></button>
        </div>
        }
        />
        </>
    )
)

const Router = () => {
    return <RouterProvider router={router}/>;
}

export default Router;