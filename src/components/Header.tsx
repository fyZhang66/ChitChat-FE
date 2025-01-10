export default function Header({}){
    return (
        <div className="header flex justify-between w-full bg-slate-300 p-2">
            <div className="header_left flex items-start ">
                {/* <img src="" alt="Logo" /> */}
                <span className="text-lg font-bold ml-8">ChitChat</span>
            </div>
            <div className="header_right flex items-center">
                <span className="mr-8 font-bold">SignIn</span>
                {/* <img src="" alt="Avator" /> */}
            </div>
        </div>
    )
}