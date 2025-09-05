import Navigation from "@/components/home/Navigation";

interface UniversalHeaderProps {
  onShowLogin: () => void;
}

const UniversalHeader = ({ onShowLogin }: UniversalHeaderProps) => {
  return <Navigation onShowLogin={onShowLogin} />;
};

export default UniversalHeader;