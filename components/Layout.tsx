import Sidebar from "./layout/Sidebar"
import Followbar from "./layout/Followbar"

interface LayoutProps {
    children: React.ReactNode
}



const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className = "h-screen bg-red">
            <div className = "container h-full mx-auto xl:px-30 max-w-7xl">
                <div className = "grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className = "col-span-3 lg:col-span-2 border-x-[2px] border-orange-300">
                        {children}
                    </div>
                    <Followbar />
                </div>
            </div>
        </div>
    )
}

export default Layout