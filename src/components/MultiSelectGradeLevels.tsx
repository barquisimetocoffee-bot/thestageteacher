import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, X } from 'lucide-react';

interface MultiSelectGradeLevelsProps {
  selectedGrades: string[];
  onGradesChange: (grades: string[]) => void;
  required?: boolean;
}

const GRADE_OPTIONS = [
  { value: 'K', label: 'Kindergarten' },
  { value: '1', label: '1st Grade' },
  { value: '2', label: '2nd Grade' },
  { value: '3', label: '3rd Grade' },
  { value: '4', label: '4th Grade' },
  { value: '5', label: '5th Grade' },
  { value: '6', label: '6th Grade' },
  { value: '7', label: '7th Grade' },
  { value: '8', label: '8th Grade' },
  { value: '9', label: '9th Grade' },
  { value: '10', label: '10th Grade' },
  { value: '11', label: '11th Grade' },
  { value: '12', label: '12th Grade' },
  { value: 'mixed', label: 'Mixed/Multi-Grade' },
];

const MultiSelectGradeLevels = ({ 
  selectedGrades, 
  onGradesChange, 
  required = false 
}: MultiSelectGradeLevelsProps) => {
  const [open, setOpen] = useState(false);

  const handleGradeToggle = (gradeValue: string) => {
    const updatedGrades = selectedGrades.includes(gradeValue)
      ? selectedGrades.filter(grade => grade !== gradeValue)
      : [...selectedGrades, gradeValue];
    
    onGradesChange(updatedGrades);
  };

  const removeGrade = (gradeValue: string) => {
    onGradesChange(selectedGrades.filter(grade => grade !== gradeValue));
  };

  const getGradeLabel = (value: string) => {
    return GRADE_OPTIONS.find(option => option.value === value)?.label || value;
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between text-left font-normal h-auto min-h-[40px] py-2 px-3"
          >
            <div className="flex flex-wrap gap-1">
              {selectedGrades.length > 0 ? (
                selectedGrades.slice(0, 2).map((grade) => (
                  <Badge key={grade} variant="secondary" className="text-xs">
                    {getGradeLabel(grade)}
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">
                  Select grade levels{required && ' *'}
                </span>
              )}
              {selectedGrades.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{selectedGrades.length - 2} more
                </Badge>
              )}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4" align="start">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Select Grade Levels</h4>
            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
              {GRADE_OPTIONS.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={selectedGrades.includes(option.value)}
                    onCheckedChange={() => handleGradeToggle(option.value)}
                  />
                  <label
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            {selectedGrades.length > 0 && (
              <div className="pt-2 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onGradesChange([])}
                  className="text-xs h-8"
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>

      {/* Selected grades display */}
      {selectedGrades.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedGrades.map((grade) => (
            <Badge
              key={grade}
              variant="default"
              className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
            >
              {getGradeLabel(grade)}
              <button
                type="button"
                onClick={() => removeGrade(grade)}
                className="ml-1 hover:bg-primary/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectGradeLevels;