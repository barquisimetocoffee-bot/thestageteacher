
import { Button } from "@/components/ui/button";
import { User, Bot, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PencilHeaderProps {
  onMenuToggle: () => void;
}

const PencilHeader = ({ onMenuToggle }: PencilHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-primary/20 p-4 flex items-center justify-between shadow-sm">
      <Button
        variant="ghost"
        size="sm"
        onClick={onMenuToggle}
        className="lg:hidden hover:bg-primary/10 text-primary"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
          <Bot className="h-5 w-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Pencil
          </h1>
          <p className="text-xs text-muted-foreground font-medium">
            by Vicerta
          </p>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/profile')}
        className="p-2 hover:bg-primary/10 text-primary"
      >
        <User className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default PencilHeader;
