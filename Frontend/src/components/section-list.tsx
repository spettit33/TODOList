export function SectionList({ children, title } : {children : React.ReactNode, title: string}){

    return  <div>
                <h1>{title}</h1>
                <div className="rounded-md border-black border-2 flex flex-col gap-2 h-[75vh]">
                    {children}
                </div>
            </div>
}