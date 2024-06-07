import Sidebar from "./layout/Sidebar"


interface LayoutProps {
    children: React.ReactNode
}



const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className = "h-screen bg-mycolor1">
            <div className = "container h-full mx-auto xl:px-30 max-w-6xl">
                <div className = "grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className = "col-span-1 lg:col-span-2 border-x-[1px] border-neutral">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout