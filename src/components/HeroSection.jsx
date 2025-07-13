
import React from 'react';
import { GraduationCap, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const HeroSection = () => {
  const inspirationalMessages = [
    {
      title: "Step into the Teacher Job Portal",
      content: "Step into the Teacher Job Portal, where passion fuels purpose! Teaching is a noble calling to shape minds, spark curiosity, and build a brighter future. Whether a novice or veteran, find opportunities across India to inspire change. Embrace challenges with resilience, turning classrooms into canvases of creativity. Mentor, guide, and empower the next generation, joining a community of educators to grow together. Your lessons plant seeds of knowledge and compassion. Start today, leave a lasting legacy, and illuminate paths for countless souls. Together, let's craft a future where education echoes through generations!",
      language: "English",
      image: "/lovable-uploads/b8da7f8f-137b-4151-8fa9-5c87afd82052.png"
    },
    {
      title: "शिक्षकों के लिए प्रेरणादायक संदेश",
      content: "शिक्षक जॉब पोर्टल में कदम रखें, जहां जुनून और उद्देश्य मिलते हैं! शिक्षण एक पवित्र कर्तव्य है, जो युवा मन को आकार देता, जिज्ञासा जगाता और उज्जवल भविष्य बनाता है। नौसिखिया हों या अनुभवी, भारत के विविध क्षेत्रों में अवसर पाएं और परिवर्तन प्रेरित करें। चुनौतियों को साहस से स्वीकार करें, कक्षा को रचनात्मकता का कैनवास बनाएं। अगली पीढ़ी का मार्गदर्शन करें, शिक्षकों के समुदाय से जुड़ें और साथ में बढ़ें। आपके पाठ ज्ञान और करुणा के बीज बोते हैं। आज शुरू करें, एक स्थायी विरासत छोड़ें, और अनगिनत आत्माओं के मार्ग प्रकाशित करें।",
      language: "हिंदी",
      image: "/lovable-uploads/ccb72601-c931-459b-a3b5-4538069daa29.png"
    },
    {
      title: "शिक्षकांसाठी प्रेरणादायक संदेश",
      content: "शिक्षक जॉब पोर्टलमध्ये पाऊल टाका, जिथे उत्साह आणि उद्देश्य एकत्र येतात! शिक्षण हे एक पवित्र कर्तव्य आहे, जे तरुण मनांना आकार देते, उत्सुकता जागवते आणि उज्ज्वल भविष्य घडवते. नवशिक्या असो वा अनुभवी, भारताच्या विविध भागांत संधी शोधा आणि बदल प्रेरित करा. आव्हानांना धैर्याने सामोरे जा, वर्गाला सर्जनशीलतेचा कॅनव्हास बनवा. पुढील पिढीचे मार्गदर्शन करा, शिक्षकांच्या समुदायात सामील व्हा आणि एकत्र वाढा. तुमचे धडे ज्ञान आणि करुणेचे बीज पेरतात. आज सुरुवात करा, कायमस्वरूपी वारसा सोडा आणि अनेक आत्म्यांचे मार्ग उजळवा!",
      language: "मराठी",
      image: "/lovable-uploads/7102412d-a67c-4c9c-b6fc-4ed2bc82ecad.png"
    },
    {
      title: "ஆசிரியர்களுக்கான உத்வேகமளிக்கும் செய்தி",
      content: "ஆசிரியர் வேலைவாய்ப்பு போர்டலில் பங்கேற்கவும், அங்கு ஆர்வமும் நோக்கமும் சேரும்! கற்பித்தல் ஒரு தூய கடமையாகும், இது இளம் மனங்களை வடிவமைக்கிறது, ஆர்வத்தைத் தூண்டுகிறது மற்றும் பிரகாசமான எதிர்காலத்தை உருவாக்குகிறது. புதுமுகராக இருந்தாலும் அல்லது அனுபவம் வாய்ந்தவராக இருந்தாலும், இந்தியாவின் பல்வேறு பகுதிகளில் வாய்ப்புகளை அறிந்து மாற்றத்தை ஊக்குவிக்கவும். சவால்களை தைரியத்துடன் எதிர்கொள்ளுங்கள், வகுப்பறையை படைப்பாற்றலின் ஓவியப்பலகையாக மாற்றுங்கள். அடுத்த தலைமுறையை வழிநடத்தி, ஆசிரியர் சமூகத்தில் இணைந்து வளருங்கள். உங்கள் பாடங்கள் அறிவு மற்றும் இரக்கத்தின் விதைகளை விதைக்கின்றன. இன்று தொடங்கி, நிலையான பாரம்பரியத்தை உருவாக்கி, பல ஆன்மாக்களின் பாதைகளை ஒளிரச் செய்யுங்கள்!",
      language: "தமிழ்",
      image: "/lovable-uploads/a49f2754-4d11-46da-98d9-f75227e8ea56.png"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white rounded-3xl mb-12 p-10 md:p-16 shadow-lg border border-border">
      <div className="scroll-mt-24">
        {/* Inspirational Carousel */}
        <div className="mb-16">
          <Carousel className="w-full">
            <CarouselContent>
              {inspirationalMessages.map((message, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          {message.language}
                        </span>
                      </div>
                      
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">
                        {message.title}
                      </h2>
                      
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-inter text-pretty">
                        {message.content}
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={message.image} 
                          alt={`Teacher teaching - ${message.language}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Main Hero Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="font-display font-bold text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-balance">
                India's Premier
                <span className="block text-primary font-display">Teaching Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-inter font-light leading-relaxed text-pretty">
                Connecting Excellence in Education
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-inter text-pretty">
                Join over 50,000+ certified teachers and connect with top educational institutions across India. 
                From CBSE to IIT coaching centers, find your perfect teaching opportunity or hire exceptional educators.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">CBSE Certified</span>
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">IIT Coaching</span>
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">Engineering Subjects</span>          
                <span className="bg-primary/10 text-primary backdrop-blur-sm px-5 py-2.5 rounded-full border border-primary/20 font-semibold font-inter shadow-sm">State Boards</span> 
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">50,000+</h3>
              <p className="text-muted-foreground font-inter font-medium">Certified Teachers</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">2,500+</h3>
              <p className="text-muted-foreground font-inter font-medium">Partner Institutions</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">98%</h3>
              <p className="text-muted-foreground font-inter font-medium">Success Rate</p>
            </div>
            <div className="bg-card backdrop-blur-md rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg border border-border shadow-sm">
              <GraduationCap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground">1000+</h3>
              <p className="text-muted-foreground font-inter font-medium">Daily Opportunities</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">IIT, NEET & Civils Focused</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">Specialized opportunities in competitive exam preparation</p>
          </div>
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">Verified Credentials</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">All teachers undergo thorough verification</p>
          </div>
          <div className="text-center p-8 bg-card rounded-xl backdrop-blur-md transition-all duration-300 border border-border group shadow-sm hover:shadow-lg">
            <h4 className="font-display font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-all">Instant Matching</h4>
            <p className="text-base text-muted-foreground font-inter leading-relaxed text-pretty">AI-powered job matching system</p>
          </div>
        </div>
      </div>
    </section>
  );
};
