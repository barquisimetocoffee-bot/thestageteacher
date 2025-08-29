import ToolModalActions from './ToolModalActions';
import ToolModalChat from './ToolModalChat';

interface ToolModalContentProps {
  tool: any;
  formData: Record<string, string>;
  generatedContent: string;
  isSaving: boolean;
  isSaved: boolean;
  isExportingSlides: boolean;
  isRegenerating: boolean;
  onCopy: () => void;
  onDownload: () => void;
  onSave: () => void;
  onExportSlides: () => void;
  onChatRegenerate: (message: string) => Promise<void>;
}

const ToolModalContent = ({ 
  tool,
  formData,
  generatedContent, 
  isSaving, 
  isSaved, 
  isExportingSlides,
  isRegenerating,
  onCopy, 
  onDownload, 
  onSave, 
  onExportSlides,
  onChatRegenerate
}: ToolModalContentProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Content</h3>
        <ToolModalActions
          generatedContent={generatedContent}
          tool={tool}
          formData={formData}
          isSaving={isSaving}
          isSaved={isSaved}
          isExportingSlides={isExportingSlides}
          onCopy={onCopy}
          onDownload={onDownload}
          onSave={onSave}
          onExportSlides={onExportSlides}
        />
      </div>
      
      <div className="min-h-[300px] border rounded-lg p-4 bg-gray-50 max-h-[600px] overflow-y-auto">
        {generatedContent ? (
          <div className="prose prose-sm max-w-none">
            {generatedContent.split('\n').map((line, index) => {
              // Handle main headings
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-xl font-bold text-gray-900 mb-4 mt-6 first:mt-0 border-b pb-2">
                    {line.substring(2)}
                  </h1>
                );
              }
              // Handle subheadings
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-lg font-semibold text-gray-800 mb-3 mt-5 first:mt-0">
                    {line.substring(3)}
                  </h2>
                );
              }
              // Handle sub-subheadings
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-md font-medium text-gray-700 mb-2 mt-4 first:mt-0">
                    {line.substring(4)}
                  </h3>
                );
              }
              // Handle bold text
              if (line.includes('**')) {
                const parts = line.split('**');
                return (
                  <p key={index} className="mb-2 leading-relaxed">
                    {parts.map((part, partIndex) => 
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex} className="font-semibold text-gray-900">{part}</strong>
                      ) : (
                        <span key={partIndex}>{part}</span>
                      )
                    )}
                  </p>
                );
              }
              // Handle bullet points
              if (line.startsWith('- ') || line.startsWith('• ')) {
                return (
                  <li key={index} className="mb-1 ml-4 text-gray-700">
                    {line.substring(2)}
                  </li>
                );
              }
              // Handle empty lines
              if (line.trim() === '') {
                return <div key={index} className="mb-2"></div>;
              }
              // Handle regular paragraphs
              return (
                <p key={index} className="mb-2 leading-relaxed text-gray-700">
                  {line}
                </p>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Generated content will appear here
          </div>
        )}
      </div>

      <ToolModalChat
        generatedContent={generatedContent}
        onChatRegenerate={onChatRegenerate}
        isRegenerating={isRegenerating}
      />
    </div>
  );
};

export default ToolModalContent;