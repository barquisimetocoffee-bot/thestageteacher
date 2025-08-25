
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
  formData: Record<string, string>;
  onInputChange: (field: string, value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const ToolModalForm = ({
  tool,
  formData,
  onInputChange,
  onGenerate,
  isGenerating,
}: ToolModalFormProps) => {
  const { t } = useTranslation();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onGenerate();
  };

  // Render different forms based on tool type
  const renderToolSpecificForm = () => {
    switch (tool.id) {
      case 1: // lesson-plan
        return (
          <>
            <div>
              <Label htmlFor="subject">{t("toolModal.subject")}</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject || ""}
                onChange={handleChange}
                placeholder={t("toolModal.subjectPlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="topic">{t("toolModal.topic")}</Label>
              <Input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic || ""}
                onChange={handleChange}
                placeholder={t("toolModal.topicPlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="grade">{t("toolModal.gradeLevel")}</Label>
              <Select onValueChange={(value) => onInputChange('grade', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("toolModal.gradeLevelPlaceholder")} />
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
          </>
        );
      case 17: // ai-text-detector
        return (
          <>
            <div>
              <Label htmlFor="studentText">{t("toolModal.studentText")}</Label>
              <Textarea
                id="studentText"
                name="studentText"
                value={formData.studentText || ""}
                onChange={handleChange}
                placeholder={t("toolModal.studentTextPlaceholder")}
                className="resize-none h-32"
              />
            </div>
            <div>
              <Label htmlFor="assignmentType">{t("toolModal.assignmentType")}</Label>
              <Input
                type="text"
                id="assignmentType"
                name="assignmentType"
                value={formData.assignmentType || ""}
                onChange={handleChange}
                placeholder={t("toolModal.assignmentTypePlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="studentGrade">{t("toolModal.studentGrade")}</Label>
              <Input
                type="text"
                id="studentGrade"
                name="studentGrade"
                value={formData.studentGrade || ""}
                onChange={handleChange}
                placeholder={t("toolModal.studentGradePlaceholder")}
              />
            </div>
          </>
        );
      case 18: // parent-email
        return (
          <>
            <div>
              <Label htmlFor="studentName">{t("toolModal.studentName")}</Label>
              <Input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName || ""}
                onChange={handleChange}
                placeholder={t("toolModal.studentNamePlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="situation">{t("toolModal.situation")}</Label>
              <Textarea
                id="situation"
                name="situation"
                value={formData.situation || ""}
                onChange={handleChange}
                placeholder={t("toolModal.situationPlaceholder")}
                className="resize-none h-24"
              />
            </div>
            <div>
              <Label htmlFor="emailType">{t("toolModal.emailType")}</Label>
              <Select onValueChange={(value) => onInputChange('emailType', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("toolModal.emailTypePlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="positive">{t("toolModal.positiveEmail")}</SelectItem>
                  <SelectItem value="concern">{t("toolModal.concernEmail")}</SelectItem>
                  <SelectItem value="meeting">{t("toolModal.meetingEmail")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        );
      case 21: // behavior-plan
        return (
          <>
            <div>
              <Label htmlFor="behaviorConcern">{t("toolModal.behaviorConcern")}</Label>
              <Textarea
                id="behaviorConcern"
                name="behaviorConcern"
                value={formData.behaviorConcern || ""}
                onChange={handleChange}
                placeholder={t("toolModal.behaviorConcernPlaceholder")}
                className="resize-none h-24"
              />
            </div>
            <div>
              <Label htmlFor="studentAge">{t("toolModal.studentAge")}</Label>
              <Input
                type="number"
                id="studentAge"
                name="studentAge"
                value={formData.studentAge || ""}
                onChange={handleChange}
                placeholder={t("toolModal.studentAgePlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="strengths">{t("toolModal.strengths")}</Label>
              <Textarea
                id="strengths"
                name="strengths"
                value={formData.strengths || ""}
                onChange={handleChange}
                placeholder={t("toolModal.strengthsPlaceholder")}
                className="resize-none h-24"
              />
            </div>
          </>
        );
      default:
        return (
          <>
            <div>
              <Label htmlFor="topic">{t("toolModal.topic")}</Label>
              <Input
                type="text"
                id="topic"
                name="topic"
                value={formData.topic || ""}
                onChange={handleChange}
                placeholder={t("toolModal.topicPlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="subject">{t("toolModal.subject")}</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject || ""}
                onChange={handleChange}
                placeholder={t("toolModal.subjectPlaceholder")}
              />
            </div>
            <div>
              <Label htmlFor="grade">{t("toolModal.gradeLevel")}</Label>
              <Select onValueChange={(value) => onInputChange('grade', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={t("toolModal.gradeLevelPlaceholder")} />
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
          </>
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {renderToolSpecificForm()}

      <Button type="submit" className="w-full my-btn" disabled={isGenerating}>
        {isGenerating ? t("toolModal.generating") : t("toolModal.generateContent")}
      </Button>
    </form>
  );
};

export default ToolModalForm;
