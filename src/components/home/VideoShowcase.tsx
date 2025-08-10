import { useTranslation } from "react-i18next";
import { Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoShowcase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("videoShowcase.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("videoShowcase.description")}
          </p>
        </div>

        <div className="relative group animate-scale-in">
          {/* Video Container with Floating Elements */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover-scale">
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Product Showcase Video */}
            <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
              {/* Animated Product Demo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Main App Interface Mockup */}
                  <div className="absolute inset-4 bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
                    {/* App Header */}
                    <div className="h-12 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-4">
                      <div className="w-6 h-6 bg-white/20 rounded mr-3"></div>
                      <div className="text-white font-semibold">EasyTeach</div>
                      <div className="ml-auto flex space-x-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                      </div>
                    </div>

                    {/* Content Area with Animated Features */}
                    <div className="p-6 h-full bg-gradient-to-br from-gray-50 to-blue-50">
                      {/* Feature 1: Lesson Planning */}
                      <div className="animate-[fadeIn_2s_ease-in-out_0s_infinite_alternate]">
                        <div className="bg-blue-100 rounded-lg p-4 mb-4 transition-all duration-500">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center animate-pulse">
                              <div className="w-4 h-4 bg-white rounded"></div>
                            </div>
                            <div className="text-blue-800 font-semibold">
                              Lesson Plan Generator
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-blue-300 rounded w-3/4 animate-[loading_2s_ease-in-out_infinite]"></div>
                            <div className="h-2 bg-blue-300 rounded w-1/2 animate-[loading_2s_ease-in-out_0.5s_infinite]"></div>
                            <div className="h-2 bg-blue-300 rounded w-2/3 animate-[loading_2s_ease-in-out_1s_infinite]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Feature 2: AI Assistant */}
                      <div className="animate-[fadeIn_2s_ease-in-out_2s_infinite_alternate]">
                        <div className="bg-purple-100 rounded-lg p-4 mb-4 transition-all duration-500">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center animate-spin">
                              <div className="w-4 h-4 bg-white rounded-full"></div>
                            </div>
                            <div className="text-purple-800 font-semibold">
                              Virtual Assistant
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-purple-300 rounded w-2/3 animate-[typing_1.5s_ease-in-out_infinite]"></div>
                            <div className="h-2 bg-purple-300 rounded w-4/5 animate-[typing_1.5s_ease-in-out_0.5s_infinite]"></div>
                            <div className="h-2 bg-purple-300 rounded w-1/2 animate-[typing_1.5s_ease-in-out_1s_infinite]"></div>
                          </div>
                        </div>
                      </div>

                      {/* Feature 3: Assessment Tools */}
                      <div className="animate-[fadeIn_2s_ease-in-out_4s_infinite_alternate]">
                        <div className="bg-green-100 rounded-lg p-4 transition-all duration-500">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-green-500 rounded-lg mr-3 flex items-center justify-center animate-bounce">
                              <div className="w-4 h-4 bg-white rounded"></div>
                            </div>
                            <div className="text-green-800 font-semibold">
                              Smart Assessments
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-green-300 rounded w-5/6 animate-[progress_3s_ease-in-out_infinite]"></div>
                            <div className="h-2 bg-green-300 rounded w-2/3 animate-[progress_3s_ease-in-out_0.5s_infinite]"></div>
                            <div className="h-2 bg-green-300 rounded w-3/4 animate-[progress_3s_ease-in-out_1s_infinite]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Feature Indicators */}
                  <div className="absolute top-6 right-6 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-[bounce_2s_infinite]">
                    15+ AI Tools
                  </div>

                  <div className="absolute bottom-6 left-6 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-[pulse_2s_infinite]">
                    Save 15h/week
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-[ping_2s_infinite]"></div>
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full animate-[ping_2s_infinite]"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full animate-[ping_2s_infinite]"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Play button overlay for interaction */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg">
                  <Play className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>

            {/* Video Info Bar */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Volume2 className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {t("videoShowcase.fullDemo")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span className="text-sm">10s Product Demo</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                >
                  {t("videoShowcase.watchFull")}
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Highlights Around Video */}
          <div
            className="absolute -left-8 top-1/4 hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-white rounded-lg p-4 shadow-lg border border-blue-200">
              <div className="text-sm font-medium text-blue-600 mb-1">
                AI-Powered
              </div>
              <div className="text-xs text-gray-600">
                Smart Content Generation
              </div>
            </div>
          </div>

          <div
            className="absolute -right-8 top-1/3 hidden lg:block animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-white rounded-lg p-4 shadow-lg border border-purple-200">
              <div className="text-sm font-medium text-purple-600 mb-1">
                Seamless Integration
              </div>
              <div className="text-xs text-gray-600">All Tools Connected</div>
            </div>
          </div>

          <div
            className="absolute -left-12 bottom-1/4 hidden lg:block animate-fade-in"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="bg-white rounded-lg p-4 shadow-lg border border-green-200">
              <div className="text-sm font-medium text-green-600 mb-1">
                Time Saving
              </div>
              <div className="text-xs text-gray-600">15+ Hours Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
