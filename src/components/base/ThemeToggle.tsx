import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/themeContext";

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
        >
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-white" />
          ) : theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] text-gray-700" />
          ) : (
            <Monitor className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-white" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px] mt-1 p-1 z-[999]">
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className="flex items-center gap-2 cursor-pointer py-2"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer py-2"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer py-2"
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
