import logo from "../assets/logo.png"
import { signInWithGoogle } from "../../services/auth"
import { supabase } from "../lib/supabase"
import type { User } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { LogOut, LogIn, Sparkles } from "lucide-react"

interface NavbarProps {
  user: User | null
}

const Navbar = ({ user }: NavbarProps) => {
  const logout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-9xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img src={logo} className="h-14 w-14 object-contain" alt="logo" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-slate-900">
                AI Resume Analyzer
              </span>
              <div className="flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-600">
  <Sparkles className="h-3 w-3" />
  
</div>
            </div>
            <span className="text-sm text-slate-500">
              ATS optimization with AI
            </span>
          </div>
        </div>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm sm:flex sm:flex-col">
              <span className="text-[11px] uppercase tracking-wide text-slate-400">
                Signed in as
              </span>
              <span className="max-w-60 truncate text-sm font-medium text-slate-700">
                {user.email}
              </span>
            </div>

            <Button
              onClick={logout}
              variant="outline"
              className="rounded-xl border-slate-300 hover:bg-red-500 active:scale-95"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        ) : (
          <Button
            onClick={signInWithGoogle}
            className="rounded-xl bg-indigo-600 hover:bg-indigo-700"
          >
            <LogIn className="mr-2 h-4 w-4" />
            Sign in
          </Button>
        )}
      </div>
    </header>
  )
}

export default Navbar