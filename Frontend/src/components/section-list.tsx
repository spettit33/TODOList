export function SectionList({ children, title } : {children : React.ReactNode, title: string}){

    return  <div onDragOver={(e) => e.preventDefault()}>
                <h1 className="font-semibold">{title}</h1>
                <div className="rounded-md border-black border-2 flex flex-col gap-2 h-[80vh]">
                    {children}
                </div>
            </div>
}