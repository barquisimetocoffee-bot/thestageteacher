import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { educationSystems, getGradesBySystem } from '@/utils/gradeSystem';

interface LanguageBasedGradeSelectorProps {
  selectedGrade: string;
  onGradeChange: (grade: string) => void;
  className?: string;
}

const LanguageBasedGradeSelector = ({
  selectedGrade,
  onGradeChange,
  className = ""
}: LanguageBasedGradeSelectorProps) => {
  const { i18n, t } = useTranslation();
  const [selectedSystem, setSelectedSystem] = useState('');

  // Map language codes to education systems
  const getSystemForLanguage = (language: string) => {
    switch (language) {
      case 'fr':
        return 'FR';
      case 'en':
        return 'US';
      case 'es':
        return 'US'; // Default to US system for Spanish
      default:
        return 'US';
    }
  };

  useEffect(() => {
    const systemCode = getSystemForLanguage(i18n.language);
    setSelectedSystem(systemCode);
    // Reset grade when language/system changes
    onGradeChange('');
  }, [i18n.language, onGradeChange]);

  const grades = getGradesBySystem(selectedSystem);

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-foreground">
        {t('grades.selectGrade')}
      </label>
      <Select value={selectedGrade} onValueChange={onGradeChange}>
        <SelectTrigger className="bg-background">
          <SelectValue placeholder={t('grades.selectGrade')} />
        </SelectTrigger>
        <SelectContent className="bg-background border">
          {grades.map((grade) => (
            <SelectItem key={grade.value} value={grade.value}>
              {grade.label} {grade.ageRange && `(${grade.ageRange} ans)`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageBasedGradeSelector;