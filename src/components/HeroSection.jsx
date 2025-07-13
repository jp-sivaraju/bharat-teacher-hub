
import React, { useEffect } from 'react';
import { GraduationCap, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const HeroSection = () => {
  const inspirationalMessages = [
    {
      title: "Step into the Teacher Job Portal",
      content: "Step into the Teacher Job Portal, where passion fuels purpose! Teaching is a noble calling to shape minds, spark curiosity, and build a brighter future. Whether a novice or veteran, find opportunities across India to inspire change. Embrace challenges with resilience, turning classrooms into canvases of creativity. Mentor, guide, and empower the next generation, joining a community of educators to grow together. Your lessons plant seeds of knowledge and compassion. Start today, leave a lasting legacy, and illuminate paths for countless souls. Together, let's craft a future where education echoes through generations!",
      language: "English",
      image: "/lovable-uploads/3b64bfc8-fc00-44bf-806d-21f79f496d90.png"
    },
    {
      title: "शिक्षकों के लिए प्रेरणादायक संदेश",
      content: "शिक्षक जॉब पोर्टल में कदम रखें, जहां जुनून और उद्देश्य मिलते हैं! शिक्षण एक पवित्र कर्तव्य है, जो युवा मन को आकार देता, जिज्ञासा जगाता और उज्जवल भविष्य बनाता है। नौसिखिया हों या अनुभवी, भारत के विविध क्षेत्रों में अवसर पाएं और परिवर्तन प्रेरित करें। चुनौतियों को साहस से स्वीकार करें, कक्षा को रचनात्मकता का कैनवास बनाएं। अगली पीढ़ी का मार्गदर्शन करें, शिक्षकों के समुदाय से जुड़ें और साथ में बढ़ें। आपके पाठ ज्ञान और करुणा के बीज बोते हैं। आज शुरू करें, एक स्थायी विरासत छोड़ें, और अनगिनत आत्माओं के मार्ग प्रकाशित करें।",
      language: "हिंदी",
      image: "/lovable-uploads/3e6f1fdf-bbbc-40a8-85d5-e4feea8ebbef.png"
    },
    {
      title: "शिक्षकांसाठी प्रेरणादायक संदेश",
      content: "शिक्षक जॉब पोर्टलमध्ये पाऊल टाका, जिथे उत्साह आणि उद्देश्य एकत्र येतात! शिक्षण हे एक पवित्र कर्तव्य आहे, जे तरुण मनांना आकार देते, उत्सुकता जागवते आणि उज्ज्वल भविष्य घडवते. नवशिक्या असो वा अनुभवी, भारताच्या विविध भागांत संधी शोधा आणि बदल प्रेरित करा. आव्हानांना धैर्याने सामोरे जा, वर्गाला सर्जनशीलतेचा कॅनव्हास बनवा. पुढील पिढीचे मार्गदर्शन करा, शिक्षकांच्या समुदायात सामील व्हा आणि एकत्र वाढा. तुमचे धडे ज्ञान आणि करुणेचे बीज पेरतात. आज सुरुवात करा, कायमस्वरूपी वारसा सोडा आणि अनेक आत्म्यांचे मार्ग उजळवा!",
      language: "मराठी",
      image: "/lovable-uploads/102b7661-2984-4bae-9113-6a55c3f7e634.png"
    },
    {
      title: "ஆசிரியர்களுக்கான உத்வேகமளிக்கும் செய்தி",
      content: "ஆசிரியர் வேலைவாய்ப்பு போர்டலில் பங்கேற்கவும், அங்கு ஆர்வமும் நோக்கமும் சேரும்! கற்பித்தல் ஒரு தூய கடமையாகும், இது இளம் மனங்களை வடிவமைக்கிறது, ஆர்வத்தைத் தூண்டுகிறது மற்றும் பிரகாசமான எதிர்காலத்தை உருவாக்குகிறது. புதுமுகராக இருந்தாலும் அல்லது அனுபவம் வாய்ந்தவராக இருந்தாலும், இந்தியாவின் பல்வேறு பகுதிகளில் வாய்ப்புகளை அறிந்து மாற்றத்தை ஊக்குவிக்கவும். சவால்களை தைரியத்துடன் எதிர்கொள்ளுங்கள், வகுப்பறையை படைப்பாற்றலின் ஓவியப்பலகையாக மாற்றுங்கள். அடுத்த தலைமுறையை வழிநடத்தி, ஆசிரியர் சமூகத்தில் இணைந்து வளருங்கள். உங்கள் பாடங்கள் அறிவு மற்றும் இரக்கத்தின் விதைகளை விதைக்கின்றன. இன்று தொடங்கி, நிலையான பாரம்பரியத்தை உருவாக்கி, பல ஆன்மாக்களின் பாதைகளை ஒளிரச் செய்யுங்கள்!",
      language: "தமிழ்",
      image: "/lovable-uploads/2468711c-e607-4b0c-a86d-0f8477b2fddd.png"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-card via-ivory to-emerald-light rounded-2xl mb-8 p-6 md:p-8 shadow-educational-lg border border-border animate-fade-in">
      <div className="scroll-mt-16">
        {/* Inspirational Carousel with Auto-scroll */}
        <div className="mb-8">
          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent>
              {inspirationalMessages.map((message, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 animate-slide-up">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-gradient-to-r from-emerald-light to-emerald/20 text-emerald px-3 py-1.5 rounded-full text-sm font-medium border border-emerald/30">
                          {message.language}
                        </span>
                      </div>
                      
                      <h2 className="font-bold text-xl md:text-2xl text-foreground leading-tight bg-gradient-to-r from-foreground via-deep-blue to-emerald bg-clip-text">
                        {message.title}
                      </h2>
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {message.content.substring(0, 200)}...
                      </p>
                    </div>
                    
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-educational-lg border border-border/50 group-hover:shadow-xl transition-all duration-300">
                        <img 
                          src={message.image} 
                          alt={`Teacher teaching - ${message.language}`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-card/90 border-emerald/30 hover:bg-emerald-light hover:text-emerald hover:border-emerald" />
            <CarouselNext className="right-4 bg-card/90 border-emerald/30 hover:bg-emerald-light hover:text-emerald hover:border-emerald" />
          </Carousel>
        </div>

        {/* Main Hero Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-bold text-foreground text-3xl md:text-4xl leading-tight">
                India's Premier
                <span className="block bg-gradient-to-r from-primary via-brand-600 to-deep-blue bg-clip-text text-transparent">
                  Teaching Platform
                </span>
              </h1>
              <p className="text-lg md:text-xl text-charcoal leading-relaxed">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-gradient-to-r from-primary/20 to-brand-100 text-primary px-4 py-2 rounded-full border border-primary/30 font-medium hover:shadow-educational transition-all">CBSE</span>
                <span className="bg-gradient-to-r from-emerald-light to-emerald/20 text-emerald px-4 py-2 rounded-full border border-emerald/30 font-medium hover:shadow-educational transition-all">IIT</span>
                <span className="bg-gradient-to-r from-primary/20 to-brand-100 text-primary px-4 py-2 rounded-full border border-primary/30 font-medium hover:shadow-educational transition-all">Engineering</span>          
                <span className="bg-gradient-to-r from-emerald-light to-emerald/20 text-emerald px-4 py-2 rounded-full border border-emerald/30 font-medium hover:shadow-educational transition-all">State Boards</span> 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-card to-emerald-light rounded-xl p-6 border border-border shadow-educational hover:shadow-educational-lg transition-all duration-300 group">
              <Users className="w-8 h-8 text-emerald mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">50,000+</h3>
              <p className="text-charcoal font-medium">Teachers</p>
            </div>
            <div className="bg-gradient-to-br from-card to-primary/20 rounded-xl p-6 border border-border shadow-educational hover:shadow-educational-lg transition-all duration-300 group">
              <Award className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">2,500+</h3>
              <p className="text-charcoal font-medium">Institutions</p>
            </div>
            <div className="bg-gradient-to-br from-card to-primary/20 rounded-xl p-6 border border-border shadow-educational hover:shadow-educational-lg transition-all duration-300 group">
              <TrendingUp className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">98%</h3>
              <p className="text-charcoal font-medium">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-card to-emerald-light rounded-xl p-6 border border-border shadow-educational hover:shadow-educational-lg transition-all duration-300 group">
              <GraduationCap className="w-8 h-8 text-emerald mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">1000+</h3>
              <p className="text-charcoal font-medium">Daily Jobs</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-card to-emerald-light rounded-xl border border-border group shadow-educational hover:shadow-educational-lg transition-all duration-300">
            <h4 className="font-semibold text-lg mb-3 text-foreground group-hover:text-emerald transition-colors">IIT, NEET & Civils</h4>
            <p className="text-charcoal leading-relaxed">Competitive exam prep coaching opportunities</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-primary/20 rounded-xl border border-border group shadow-educational hover:shadow-educational-lg transition-all duration-300">
            <h4 className="font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">Verified Credentials</h4>
            <p className="text-charcoal leading-relaxed">Thorough verification and background checks</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-card to-emerald-light rounded-xl border border-border group shadow-educational hover:shadow-educational-lg transition-all duration-300">
            <h4 className="font-semibold text-lg mb-3 text-foreground group-hover:text-emerald transition-colors">Instant Matching</h4>
            <p className="text-charcoal leading-relaxed">AI-powered matching with suitable positions</p>
          </div>
        </div>
      </div>
    </section>
  );
};
