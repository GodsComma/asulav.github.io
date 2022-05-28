type ToggleProps = {
    label: string;
    status: boolean;
    setTheme: React.Dispatch<boolean>;
}

//TODO: Use THEMES to customize these

const Toggle = ({ status, setTheme, label }: ToggleProps) => {

    return (
        <div className="flex">
            <div className="mx-2 w-8 my-1 inline-flex h-5 items-center justify-center pr-0.5 pb-0.5">
                <div className="h-full flex-1 ">
                    <div className={`flex h-full flex-1 items-center justify-start rounded-full bg-gray-300 py-1 pl-1 pr-5 shadow ${status? `shadow-gray-500`: `shadow-black`}`}>
                        <button className ={`flex-1 h-3 w-3 rounded-full bg-white ${status ? `translate-x-4` : `translate-x-0`} duration-500 `} onClick={()=> setTheme(!status)} />
                    </div>
                </div>
            </div>
            <label >{label}</label>
        </div >
    );
};

export default Toggle;