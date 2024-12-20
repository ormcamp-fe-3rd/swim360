import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function LogoutButton(){


  function logout(){
    sessionStorage.removeItem('id');
    alert("👋안녕히가세요👋");
    window.location.href = "/"
  }

  return(
    <div className="flex justify-end pt-20">
        <div className="flex flex-col justify-center pr-4">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <div onClick={logout} className="text-4xl">
                👋
              </div>
              </TooltipTrigger>
            <TooltipContent className="px-4 mb-1 shadow-lg rounded-md">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      </div>
  )
}