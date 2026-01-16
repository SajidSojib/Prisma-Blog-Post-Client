import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { NavMenu } from "@/components/layout/nav-menu";
import { NavigationSheet } from "@/components/layout/navigation-sheet";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-background border max-w-(--breakpoint-xl) mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ModeToggle></ModeToggle>
          <Button
            variant="outline"
            className="hidden md:inline-flex rounded-full"
          >
            Login
          </Button>
          <Button className="hidden md:inline-flex rounded-full">
            Sign Out
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
