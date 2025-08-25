import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Lightbulb, Target, Users } from "lucide-react";

interface ToolModalFormProps {
  tool: any;
  teacherProfile: any;
  onSubmit: (data: any) => void;
}

export function ToolModalForm({
  tool,
  teacherProfile,
  onSubmit,
}: ToolModalFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    topic: "",
    gradeLevel: "",
    learningObjective: "",
    classSize: "",
    timeRequired: "",
    materials: "",
    instructions: "",
    differentiation: "",
    assessment: "",
  });

  useEffect(() => {
    if (tool) {
      setFormData({
        topic: tool.topic || "",
        gradeLevel: tool.gradeLevel || "",
        learningObjective: tool.learningObjective || "",
        classSize: tool.classSize || "",
        timeRequired: tool.timeRequired || "",
        materials: tool.materials || "",
        instructions: tool.instructions || "",
        differentiation: tool.differentiation || "",
        assessment: tool.assessment || "",
      });
    }
  }, [tool]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Topic and Grade Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="topic">{t("toolModal.topic")}</Label>
          <Input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder={t("toolModal.topicPlaceholder")}
          />
        </div>
        <div>
          <Label htmlFor="gradeLevel">{t("toolModal.gradeLevel")}</Label>
          <Select onValueChange={(value) => handleChange({ target: { name: 'gradeLevel', value } })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("toolModal.gradeLevelPlaceholder")} value={formData.gradeLevel} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="K">{t("toolModal.gradeK")}</SelectItem>
              <SelectItem value="1">{t("toolModal.grade1")}</SelectItem>
              <SelectItem value="2">{t("toolModal.grade2")}</SelectItem>
              <SelectItem value="3">{t("toolModal.grade3")}</SelectItem>
              <SelectItem value="4">{t("toolModal.grade4")}</SelectItem>
              <SelectItem value="5">{t("toolModal.grade5")}</SelectItem>
              <SelectItem value="6">{t("toolModal.grade6")}</SelectItem>
              <SelectItem value="7">{t("toolModal.grade7")}</SelectItem>
              <SelectItem value="8">{t("toolModal.grade8")}</SelectItem>
              <SelectItem value="9">{t("toolModal.grade9")}</SelectItem>
              <SelectItem value="10">{t("toolModal.grade10")}</SelectItem>
              <SelectItem value="11">{t("toolModal.grade11")}</SelectItem>
              <SelectItem value="12">{t("toolModal.grade12")}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Learning Objective */}
      <div>
        <Label htmlFor="learningObjective">
          {t("toolModal.learningObjective")}
        </Label>
        <Textarea
          id="learningObjective"
          name="learningObjective"
          value={formData.learningObjective}
          onChange={handleChange}
          placeholder={t("toolModal.learningObjectivePlaceholder")}
          className="resize-none h-24"
        />
      </div>

      {/* Class Size and Time Required */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="classSize">{t("toolModal.classSize")}</Label>
          <Input
            type="number"
            id="classSize"
            name="classSize"
            value={formData.classSize}
            onChange={handleChange}
            placeholder={t("toolModal.classSizePlaceholder")}
          />
        </div>
        <div>
          <Label htmlFor="timeRequired">{t("toolModal.timeRequired")}</Label>
          <Input
            type="text"
            id="timeRequired"
            name="timeRequired"
            value={formData.timeRequired}
            onChange={handleChange}
            placeholder={t("toolModal.timeRequiredPlaceholder")}
          />
        </div>
      </div>

      {/* Materials */}
      <div>
        <Label htmlFor="materials">{t("toolModal.materials")}</Label>
        <Textarea
          id="materials"
          name="materials"
          value={formData.materials}
          onChange={handleChange}
          placeholder={t("toolModal.materialsPlaceholder")}
          className="resize-none h-24"
        />
      </div>

      {/* Instructions */}
      <div>
        <Label htmlFor="instructions">{t("toolModal.instructions")}</Label>
        <Textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder={t("toolModal.instructionsPlaceholder")}
          className="resize-none h-32"
        />
      </div>

      {/* Differentiation */}
      <div>
        <Label htmlFor="differentiation">
          {t("toolModal.differentiation")}
        </Label>
        <Textarea
          id="differentiation"
          name="differentiation"
          value={formData.differentiation}
          onChange={handleChange}
          placeholder={t("toolModal.differentiationPlaceholder")}
          className="resize-none h-24"
        />
      </div>

      {/* Assessment */}
      <div>
        <Label htmlFor="assessment">{t("toolModal.assessment")}</Label>
        <Textarea
          id="assessment"
          name="assessment"
          value={formData.assessment}
          onChange={handleChange}
          placeholder={t("toolModal.assessmentPlaceholder")}
          className="resize-none h-24"
        />
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full my-btn">
        {t("toolModal.generateLessonPlan")}
      </Button>
    </form>
  );
}
